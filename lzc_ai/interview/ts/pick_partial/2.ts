interface User{
    email:string;

}
type UserKeys = keyof User;
type KeepKeys = Exclude<UserKeys,'email'>;
type MyOmitUser = Pick<User,KeepKeys>;

