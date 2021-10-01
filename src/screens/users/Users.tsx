import React, { useContext } from "react";
import { UserContext } from "../../contexts/users-context";
import { UserData } from "../../common/model/Users";
import { InputField } from "../../components/inputField/InputField";
import { Card } from "../../components/card/Card";
import "./Users.css";
import assets from "../../common/Assets";

import useSearchUser from "../../utility/searchHooks";

const Users = () => {
  const { users } = useContext<any>(UserContext);
  const { name, email, renderingUsers, handleInputChange } =
    useSearchUser(users);
    
  return (
    <div className="wrapper">
      <div className="filterWrapper">
        <div className="filters">
          <div className="nameFilter">
            <InputField
              value={name}
              testId="name-username-filter"
              label="label"
              placeholder="Filter by name/ username"
              onChange={(event) => handleInputChange(event, "name")}
            />
          </div>
          <div className="emailFilter">
            <InputField
              value={email}
              testId="email-filter"
              label="label"
              placeholder="Filter by email"
              onChange={(event) => handleInputChange(event, "email")}
            />
          </div>
        </div>
      </div>

      <div className="usersWrapper">
        {renderingUsers &&
          renderingUsers.map((user: any, index: number) => (
            <div key={user.id} className="col-4 col_12_xs col_6_sm">
              <div className="user">
                <Card>
                  <div
                    data-testid={"userContent" + (index + 1)}
                    className="userContent"
                  >
                    <div className="triangle"></div>
                    <div className="triangleRightBtm"></div>
                    <img src={assets.userIcon} alt="userIcon" />
                    <div data-testid={"name" + (index + 1)} className="name">
                      {user.name}
                    </div>
                    <div className="email">
                      <a
                        className="mailTo"
                        data-testid={"email" + (index + 1)}
                        href={`mailto:${user.email}`}
                      >
                        <span>
                          <img
                            className="userIcon"
                            src={assets.emailIcon}
                            alt="mailIcon"
                          />
                        </span>
                        {user.email}
                      </a>
                    </div>
                    <div className="phone">
                      <a
                        className="mailTo"
                        data-testid={"tel" + (index + 1)}
                        href={`tel:${user.phone}`}
                      >
                        <span>
                          <img
                            className="userIcon"
                            src={assets.phoneIcon}
                            alt="phoneIcon"
                          />
                        </span>
                        {user.phone}
                      </a>
                    </div>
                    <div
                      data-testid={"address" + (index + 1)}
                      className="address"
                    >
                      <span>
                        <img
                          className="userIcon"
                          src={assets.locattionIcon}
                          alt="phoneIcon"
                        />
                      </span>
                      {user.address.street}
                      {" " + user.address.suite}
                      <br />
                      {user.address.city}
                      <br />
                      {user.address.zipcode}
                    </div>
                    <div>
                      <a
                        data-testid={"website" + (index + 1)}
                        href={"www." + user.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="webIcon"
                          src={assets.webIcon}
                          alt="website"
                        />
                      </a>
                    </div>
                    <div data-testid={"company" + (index + 1)}>
                      <span>
                        <img
                          className="userIcon"
                          src={assets.officeIcon}
                          alt="phoneIcon"
                        />
                      </span>
                      {user.company.name}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Users);
