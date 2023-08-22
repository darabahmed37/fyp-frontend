import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../utils/axios";

const MechanicProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<any>();
  useEffect(() => {
    if (id) {
      getRequest(`/mechanic/${id}`).then(response=>{
        setProfile(response.data)
      })
    };
  }, [id]);
  return <div>{profile}</div>;
};

export default MechanicProfile;
