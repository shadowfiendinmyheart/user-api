import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  QueryParams,
  UploadedFile,
  UseBefore,
} from "routing-controllers";
import { authenticateToken } from "../middlewares/auth.middleware";
import { fileUploadOptions } from "../utils/fileUploadOptions";
import userService from "../services/user.service";
import "reflect-metadata";
import { CreateUserDto, LoginUserDto, UpdateUserDto } from "../dto/user.dto";

@Controller()
export class UserController {
  @HttpCode(201)
  @Post("/user/register")
  register(
    @UploadedFile("fileName", { options: fileUploadOptions })
    file: Express.Multer.File,
    @Body() user: CreateUserDto
  ) {
    return userService.registration(user, file);
  }

  @Post("/user/login")
  login(@Body() user: LoginUserDto) {
    return userService.login(user);
  }

  @UseBefore(authenticateToken)
  @Put("/profile/:id")
  @HttpCode(204)
  update(
    @UploadedFile("fileName", { options: fileUploadOptions })
    file: Express.Multer.File,
    @Param("id") id: number,
    @Body() user: UpdateUserDto
  ) {
    return userService.update(id, user);
  }

  @UseBefore(authenticateToken)
  @Get("/profile/:id")
  getOne(@Param("id") id: number) {
    return userService.getOne(id);
  }

  @UseBefore(authenticateToken)
  @Get("/profiles")
  pagination(@QueryParams() query: { page: string }) {
    return userService.getPage(Number(query.page));
  }
}
