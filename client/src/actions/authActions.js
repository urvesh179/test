import * as action from '../api/index';
import { sigin, signup } from '../redux-store/userSlice'

export const siginAction = async (userData, dispatch, navigate) => {

  try {
    const { data } = await action.signIn(userData);

    dispatch(sigin({
      firstname: data.result.first_name,
      lastname: data.result.last_name,
      email: data.result.email,
      mobile: data.result.mobile,
      token: data.token,
      isAuthenticated: true

    }))

    localStorage.setItem("token", JSON.stringify(data.token))
    
    localStorage.setItem("id", JSON.stringify(data.result._id))

    navigate("/profile");

  } catch (error) {
    console.log(error);
  }

}

export const signupAction = async (userData, dispatch, navigate) => {

  try {
    const { data } = await action.signUp(userData);

    dispatch(signup({
      firstname: data.result.first_name,
      lastname: data.result.last_name,
      email: data.result.email,
      mobile: data.result.mobile,
      token: data.token,
      isAuthenticated: true

    }))

    localStorage.setItem("token", JSON.stringify(data.token))

    localStorage.setItem("id", JSON.stringify(data.result._id))

    navigate("/profile");

  } catch (error) {
    console.log(error);
  }

}

export const getUserData = async (id, dispatch, navigate) => {

  try {

    const { data } = await action.getUserData(id);

    if (data.result) {

      dispatch(signup({
        firstname: data.result.first_name,
        lastname: data.result.last_name,
        email: data.result.email,
        mobile: data.result.mobile,
        token: data.token,
        isAuthenticated: true
      }))

      localStorage.setItem("id", JSON.stringify(data.result._id))

    } else {

      localStorage.clear();

      navigate("/signin");

    }

  } catch (error) {

    console.log(error);

  }

}