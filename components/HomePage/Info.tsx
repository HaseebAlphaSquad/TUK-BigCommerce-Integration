import React from 'react';
import Button from "./Button";
import Link from "next/link";

const Info = (props: { title: React.ReactNode; description: React.ReactNode; text: React.ReactNode; }) => (
    <div>
        <h1 className="montserrat align-middle text-4xl font-bold">{props.title}</h1>
        <p className="montserrat align-middle pt-2 pb-2">{props.description}</p>
        <Link href="/collections">
            <a>
                <Button text={props.text}>
                </Button>    
            </a>
        </Link>
    </div>
);

export default Info;
