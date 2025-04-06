///<reference types="react" />

declare module "auth/auth" {
    const Auth: React.ComponentType;
    export default Auth;
}

declare module "auth/signIn" {
    const SignIn: React.ComponentType;
    export default SignIn;
}
declare module "auth/signUp" {
    const SignUp: React.ComponentType;
    export default SignUp;
}
declare module "bookings/booking"{
    const Booking: React.ComponentType;
    export default Booking;
}

declare module "bookings/Confirmation" {
    const BookingConfirm: React.ComponentType;
    export default BookingConfirm;
}

declare module "packages/packagelist" {
    const Packages: React.ComponentType;
    export default Packages;
}

declare module "packages/packagedetail" {
    const Packagedetail: React.ComponentType;
    export default Packagedetail;
}

declare module "packages/wishlist" {
    const WishList: React.ComponentType;
    export default WishList;
}

