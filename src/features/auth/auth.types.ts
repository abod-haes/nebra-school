export type Tokens = {accessToken:string;refreshToken:string;mustChangePassword?:boolean}
export type Membership = {id:string;status:string;institution:{id:string;name:string;type:string;status:string};roles:{role:{code:string;name:string}}[]}
export type Identity = {id:string;displayName:string;phone:string;security?:{mustChangePassword?:boolean};memberships:Membership[]}