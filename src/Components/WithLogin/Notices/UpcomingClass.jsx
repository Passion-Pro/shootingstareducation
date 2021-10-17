import React from "react";
import styled from "styled-components";

function UpcomingClass() {
  return (
    <>
      <Container>
        <div className="upcoming_class">
          <p className="upcoming_class_timing">
            Upcoming Class at 14:33 on Monday
          </p>
          <p className="upcoming_class_topic">Topic : Projectile Motion</p>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #e9e7e7;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid lightgray;

  .upcoming_class {
    display: flex;
    flex-direction: column;
  }

  .upcoming_class_timing {
    margin-bottom: 5px;
    font-size: 17px;
  }

  .upcoming_class_topic {
    margin-bottom: 5px;
    font-size: 16px;
    font-style: italic;
  }
`;

export default UpcomingClass;
