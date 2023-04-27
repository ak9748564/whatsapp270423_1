import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import Profile_business from './Profile_business';
import Profile_group from './Profile_group';
import Profile_normal from './Profile_normal';
import Profile_self from './Profile_self';

export default function Profile_details(props) {

    // const {profileType} = useContext(Context);

    const profileType = "normal";

  return (
    <div>
        <div>
            <div className={ profileType === "group" ? "" : "hidden"  }>
                <Profile_group/>
            </div>
            <div className={ profileType === "self" ? "" : "hidden"  }>
                <Profile_self/>
            </div>
            <div className={ profileType === "normal" ? "" : "hidden"  }>
                <Profile_normal/>
            </div>
            <div className={ profileType === "business" ? "" : "hidden"  }>
                <Profile_business/>
            </div>
        </div>
    </div>
  )
}
