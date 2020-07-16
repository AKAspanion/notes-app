import React from "react";

import { Card } from "react-bootstrap";
function EmptyState({ title = "No data found", subtitle }) {
  return (
    <Card className="d-flex align-items-center justify-content-center full-width full-height">
      <div className="text-center pb-5" style={{ maxWidth: "250px" }}>
        <img alt="empty state" src="images/empty-state.svg" />
        {!!title && <div className="h5">{title}</div>}
        {!!subtitle && <div className="font-weight-light">{subtitle}</div>}
      </div>
    </Card>
  );
}

export default EmptyState;
