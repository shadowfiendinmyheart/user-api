import httpContext from "express-http-context";
import { NotAcceptableError, NotFoundError } from "routing-controllers";
import databaseConfig from "../app-data-source";
import { PAGINATION_LIMIT } from "../constants/user.constants";
import { UpdateUserDto, CreateUserDto, LoginUserDto } from "../dto/user.dto";
import { User } from "../entity/user.entity";
import makeHash from "../utils/makeHash";
import tokenService from "./token.service";

class UserService {
  private userRepository = databaseConfig.getRepository(User);

  public async registration(user: CreateUserDto, file: any) {
    try {
      const findedUser = await this.userRepository.findOneBy({
        email: user.email,
      });
      if (findedUser) {
        throw new NotFoundError("User Already Exist. Please Login.");
      }

      const fileName = httpContext.get("fileName");
      const hashPassword = makeHash(user.password);
      const createdUser = await this.userRepository.save({
        ...user,
        photo: fileName,
        password: hashPassword,
      });
      const token = tokenService.generateToken({
        id: createdUser.id,
        email: createdUser.email,
      });

      return {
        ...createdUser,
        token,
      };
    } catch (err) {
      console.log(err);
    }
  }

  public async login(user: LoginUserDto) {
    try {
      const findedUser = await this.userRepository.findOneBy({
        email: user.email,
      });
      if (!findedUser) {
        throw new NotFoundError("User was not found.");
      }

      const hashPassword = makeHash(user.password);
      if (findedUser.password !== hashPassword) {
        throw new NotAcceptableError("Wrong password.");
      }

      const token = tokenService.generateToken({
        id: findedUser.id,
        email: findedUser.email,
      });

      return {
        ...findedUser,
        token,
      };
    } catch (err) {
      console.log(err);
    }
  }

  public async update(id: number, user: UpdateUserDto) {
    const fileName = httpContext.get("fileName");

    const updatedData = await this.userRepository.update(
      { id },
      { ...user, photo: fileName }
    );
    return updatedData;
  }

  public async getOne(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  public async getPage(page: number) {
    const [result, total] = await this.userRepository.findAndCount({
      order: { createdDate: "ASC" },
      take: PAGINATION_LIMIT,
      skip: page * PAGINATION_LIMIT,
    });

    return {
      result,
      total,
    };
  }
}

export default new UserService();
