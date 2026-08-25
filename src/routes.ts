import { index, route, type RouteConfig } from "@react-router/dev/routes"

export default [
  route(":lang?", "layout.tsx", [
    index("pages/home.tsx"),
    route("fonctionnalites", "pages/features.tsx"),
    route("tarifs", "pages/pricing.tsx"),
    route("calculateur", "pages/calculator.tsx"),
    route("demo", "pages/demo.tsx"),
    route("a-propos", "pages/about.tsx"),
    route("salons", "pages/salons.tsx"),
    route("coffee", "pages/coffee.tsx"),
    route("restaurants", "pages/restaurants.tsx"),
    route("confidentialite", "pages/privacy.tsx"),
    route("conditions", "pages/terms.tsx"),
    route("*", "pages/not-found.tsx"),
  ]),
] satisfies RouteConfig
