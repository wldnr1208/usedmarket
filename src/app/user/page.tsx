import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import React from "react";

const UserPage = async () => {
  //const session = await getServerSession(authOptions);
  //console.log("session", session);

  return <div>로그인 유저만 보게</div>;
};

export default UserPage;
