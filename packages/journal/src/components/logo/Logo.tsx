import React from "react";
import { Row } from "@mpkelly/siam";

export const Logo = () => {
  return (
    <Row borderRadius={"sm"} gravity="center">
      <Row
        flexGrow={0}
        flexShrink={0}
        borderRadius="md"
        gravity="center"
        size={40}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 66.7205C0 75.1591 6.84087 82 15.2795 82H66.7205C75.1591 82 82 75.1591 82 66.7205V15.2795C82 6.84087 75.1591 4.47035e-06 66.7205 4.47035e-06H15.2795C6.84086 4.47035e-06 0 6.84087 0 15.2795V66.7205Z"
            fill="#4C5ADE"
          />
          <path
            d="M59.1707 22.2195C52.9512 23.561 48.439 24.5366 44.0488 28.561V61C48.3807 57.751 52.9502 56.758 58.46 55.5606L58.6829 55.5122C60.6341 55.0244 62.5854 54.6585 64.7805 54.0488V21C62.8293 21.4878 60.878 21.8537 59.1707 22.2195Z"
            fill="white"
          />
          <path
            d="M23.6097 22.2195C29.8293 23.561 34.3414 24.5366 38.7317 28.561V61C34.3997 57.751 29.8303 56.758 24.3205 55.5606L24.0975 55.5122C22.1463 55.0244 20.1951 54.6585 18 54.0488V21C19.9512 21.4878 21.9024 21.8537 23.6097 22.2195Z"
            fill="white"
          />
        </svg>
      </Row>
    </Row>
  );
};
