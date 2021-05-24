import React, { useState, useEffect } from 'react';

export default function Form(props) {
    
    const formName = window.location.pathname.split('/')[2];

    return (
        <div>
            <div> Welcome to FORM {formName} ! </div>
        </div>
    )
}