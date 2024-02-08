import {UserEntity} from "../entities/user.entity";
import {RegisterUserDto} from "../dto/auth/register-user.dto";
import {LoginUserDto} from "../dto/auth/login-user.dto";

export abstract  class AuthDatasource {
    abstract  loginUser(loginUserDto:LoginUserDto): Promise<UserEntity>;
    abstract  registerUser(registerUserDto:RegisterUserDto): Promise<UserEntity>;
    /*abstract  getUserByEmail(email: string): Promise<any>;
    abstract  getUserById(id: string): Promise<any>;
    abstract  updateUser(user: any): Promise<any>;
    abstract  deleteUser(id: string): Promise<any>;
    abstract  changePassword(id: string, password: string): Promise<any>;
    abstract  resetPassword(email: string): Promise<any>;
    abstract  verifyEmail(email: string): Promise<any>;
    abstract  verifyResetPasswordToken(token: string): Promise<any>;
    abstract  verifyEmailToken(token: string): Promise<any>;
    abstract  changeEmail(id: string, email: string): Promise<any>;
    abstract  verifyEmailChangeToken(token: string): Promise<any>;
    abstract  changeRole(id: string, role: string): Promise<any>;
    abstract  getRole(id: string): Promise<any>;
    abstract  getPermissions(id: string): Promise<any>;
    abstract  addPermission(id: string, permission: string): Promise<any>;
    abstract  removePermission(id: string, permission: string): Promise<any>;
    abstract  getRoles(): Promise<any>;
    abstract  addRole(role: string): Promise<any>;
    abstract  removeRole(role: string): Promise<any>;
    abstract  addRolePermission(role: string, permission: string): Promise<any>;
    abstract  removeRolePermission(role: string, permission: string): Promise<any>;
    abstract  getRolePermissions(role: string): Promise<any>;
    abstract  getRoleUsers(role: string): Promise<any>;
    abstract  addRoleUser(role: string, user: string): Promise<any>;
    abstract  removeRoleUser(role: string, user: string): Promise<any>;
    abstract  getPermissionsByRole(role: string): Promise<any>;
    abstract  getRolesByUser(id: string): Promise<any>;
    abstract  getPermissionsByUser(id: string): Promise<any>;
    abstract  addRolePermission(role: string, permission: string): Promise<any>;
    abstract  removeRolePermission(role: string, permission: string): Promise<any>;
    abstract  getRolePermissions(role: string): Promise<any>;
    abstract  getRoleUsers(role: string): Promise<any>;
    abstract  addRoleUser(role: string, user: string): Promise<any>;*/


}