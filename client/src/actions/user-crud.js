import { SubmissionError } from "redux-form";
import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const UPDATED_USER_SUCCESS = "UPDATED_USER_SUCCESS";
export const updatedUserSuccess = (updatedUser, message) => ({
  type: UPDATED_USER_SUCCESS,
  updatedUser,
  message
});

export const registerUser = user => dispatch => {
  console.log("test", user);
  let done = fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const { reason, message, location, status } = err;
      if (reason === "ValidationError" || status === 401) {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      } else {
        return Promise.reject(
          new SubmissionError({
            _error: "Unable to register, please try again"
          })
        );
      }
    });

  return done;
};
