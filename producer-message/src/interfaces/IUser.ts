export interface User{
    id: string
    name: string
    email: string
    profileImage: string
    created_at: string
}

export interface NewUserData {
    name: string
    email: string
    profileImage: string
}