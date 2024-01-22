///////////////////////////////////////////////////////////////////////////
/// GENERATED FILE --- DO NOT EDIT --- YOUR CHANGES WILL BE OVERWRITTEN ///
///////////////////////////////////////////////////////////////////////////

export type AppRoutes = "/" | "/products/" | "/products/[id]/";

export interface AppRouteMap {
  "/": {};
  "/products/": {};
  "/products/[id]/": { id: string };
}

export interface AppRouteParamsFunction {
  (route: "/", params?: {}): string;
  (route: "/products/", params?: {}): string;
  (route: "/products/[id]/", params: { id: string }): string;
}

export type AppLinkProps =
  | { route: "/" }
  | { route: "/products/" }
  | { route: "/products/[id]/"; "param:id": string };
