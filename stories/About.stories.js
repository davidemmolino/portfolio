/* eslint-disable import/no-anonymous-default-export */
import About from "../pages/about";

export default {
    title: 'About',
    component: About
};

export const Summary = () => (<>
    <h2>Who am I?</h2>
    <p>I&apos;m a Full Stack Software Engineer located in Los Angeles, CA.</p>
    <p>Passionate about contributing to open-source projects, application testing, and technology.</p>
    <p>I enjoy creating great software and working in a collaborative environment.</p>
</>);