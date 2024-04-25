import { onMounted, ref } from "vue";
import axiosInstance from "./axios.js";

// env
export const useUser = async () => {
  const user = ref();
  const getUser = async () => {
    try {
      const response = await axiosInstance.get(`/users/user`, {
        withCredentials: true,
      });
      user.value = response.data;
    } catch (err) {
      console.log(err);
    }
  };
  // getUser();
  onMounted(getUser);
  return { user, getUser };
};
