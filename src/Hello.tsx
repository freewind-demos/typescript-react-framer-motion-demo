import React, {FC, useState} from 'react';
import {motion} from 'framer-motion';
import {css} from '@emotion/css';
import {useInterval} from "ahooks";

type Props = {};

export const Hello: FC<Props> = ({}) => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(0);

    useInterval(() => {
        setX(Math.random() * 100);
        setY(Math.random() * 100);
        setScale(Math.random() * 3);
        setRotate(Math.random() * 360);
    }, 1000)

    return <div className={'Hello'}>
        <h1>Hello Framer Motion</h1>
        <div>
            <motion.div
                className={css`background-color: red;
                  width: 100px;
                  height: 100px`}
                animate={{
                    x,
                    y,
                    scale,
                    rotate,
                }}
            />
        </div>
    </div>;
}
