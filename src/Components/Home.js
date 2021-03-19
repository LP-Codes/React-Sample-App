import React from "react";
import { Jumbotron, Button } from "reactstrap";

export default function Home() {
    return (
        <div>
            <div className="container-fluid "  >
                {" "}
                <Jumbotron className="text-center bg-info text-light ">
                    <h1
                        className="display-3"
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        Hello!
          </h1>{" "}
                    <p >
                        This is a simple hero unit, a simple Jumbotron - style component for
            calling extra attention to featured content or information.{" "}
                    </p>{" "}
                    <div className="text-center"><Button color="warning">Start Learning</Button></div>
                </Jumbotron>{" "}

            </div>{" "}
        </div>
    );
}
