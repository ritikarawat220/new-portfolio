import React from 'react';
import { DiRuby } from 'react-icons/di';
import { IoLogoNodejs } from 'react-icons/io';
import { SiPostgresql, SiRubyonrails } from 'react-icons/si';
import { HiOutlineColorSwatch, HiLockClosed, HiOutlineDeviceTablet } from 'react-icons/hi';
import styles from './Tech.module.css';
import VercelIcon from '../ICONS/VercelIcon';
import RenderIcon from '../ICONS/RenderIcon';
import GitIcon from '../ICONS/GitIcon';
import GithubIcon from '../ICONS/GithubIcon';
import VscodeIcon from '../ICONS/VscodeIcon';
import TerminalIcon from '../ICONS/TerminalIcon';
import GitlabIcon from '../ICONS/GitlabIcon';
import ReactIcon from '../ICONS/ReactIcon';
import JavascriptIcon from '../ICONS/JavascriptIcon';
import ReduxIcon from '../ICONS/ReduxIcon';
import BootstrapIcon from '../ICONS/BootstrapIcon';
import SassIcon from '../ICONS/SassIcon';
import CssIcon from '../ICONS/CssIcon';
import HtmlIcon from '../ICONS/HtmlIcon';

const Tech = () => (
  <>
    <section className={styles.techHead}>
      <h1>My Skills</h1>
      <p>
        Passionate about new technologies,
        I keep exploring stuff. Here&apos;s the tech stack I&apos;ve worked with!
      </p>
    </section>
    <section className={styles.wrapper}>

      <article className={`${styles.container} ${styles.frontContainer}`}>
        <h2>Front-end</h2>
        <ul>
          <li>
            {' '}
            <HtmlIcon />
            HTML5
          </li>
          <li>
            {' '}
            <CssIcon />
            {' '}
            CSS3
          </li>
          <li>
            {' '}
            <JavascriptIcon />
            {' '}
            JavaScript
          </li>
          <li>
            {' '}
            <ReactIcon />
            {' '}
            React
          </li>
          <li>
            {' '}
            <ReduxIcon />
            {' '}
            Redux
          </li>
          <li>
            {' '}
            <BootstrapIcon />
            {' '}
            Bootstrap
          </li>
          <li>
            {' '}
            <SassIcon />
            {' '}
            Sass
          </li>
        </ul>
      </article>

      <article className={`${styles.container} ${styles.backContainer}`}>
        <h2>Back-end</h2>
        <ul>
          <li>
            {' '}
            <DiRuby />
            {' '}
            Ruby
          </li>
          <li>
            {' '}
            <SiRubyonrails />
            {' '}
            Rails
          </li>
          <li>
            {' '}
            <SiPostgresql />
            {' '}
            PostgreSQL
          </li>
          <li>
            <HiOutlineColorSwatch />
            {' '}
            Rswag
          </li>
          <li>
            <HiLockClosed />
            {' '}
            CanCanCan
          </li>
          <li>
            <HiOutlineDeviceTablet />
            {' '}
            Devise
          </li>
          <li>
            <IoLogoNodejs />
            {' '}
            Node.js
          </li>
        </ul>
      </article>

      <article className={`${styles.container} ${styles.otherContainer}`}>
        <h2>Developer tools</h2>
        <ul>
          <li>
            <GitIcon />
            {' '}
            Git
          </li>
          <li>
            <GithubIcon />
            {' '}
            GitHub
          </li>
          <li>
            <RenderIcon />
            {' '}
            Render
          </li>
          <li>
            <VercelIcon />
            Vercel
          </li>
          <li>
            <VscodeIcon />
            VS Code
          </li>
          <li>
            <TerminalIcon />
            {' '}
            Terminal
          </li>
          <li>
            <GitlabIcon />
            {' '}
            GitLab
          </li>
        </ul>
      </article>

    </section>
  </>
);

export default Tech;
