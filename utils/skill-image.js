import adobeXd from '../assets/svg/skills/adobe-xd.svg';
import afterEffects from '../assets/svg/skills/after-effects.svg';
import angular from '../assets/svg/skills/angular.svg';
import aws from '../assets/svg/skills/aws.svg';
import azure from '../assets/svg/skills/azure.svg';
import bootstrap from '../assets/svg/skills/bootstrap.svg';
import bulma from '../assets/svg/skills/bulma.svg';
import c from '../assets/svg/skills/c.svg';
import capacitorjs from '../assets/svg/skills/capacitorjs.svg';
import coffeescript from '../assets/svg/skills/coffeescript.svg';
import cplusplus from '../assets/svg/skills/cplusplus.svg';
import csharp from '../assets/svg/skills/csharp.svg';
import css from '../assets/svg/skills/css.svg';
import deno from '../assets/svg/skills/deno.svg';
import django from '../assets/svg/skills/django.svg';
import docker from '../assets/svg/skills/docker.svg';
import fastify from '../assets/svg/skills/fastify.svg';
import gcp from '../assets/svg/skills/gcp.svg';
import git from '../assets/svg/skills/git.svg';
import go from '../assets/svg/skills/go.svg';
import graphql from '../assets/svg/skills/graphql.svg';
import html from '../assets/svg/skills/html.svg';
import illustrator from '../assets/svg/skills/illustrator.svg';
import java from '../assets/svg/skills/java.svg';
import javascript from '../assets/svg/skills/javascript.svg';
import kotlin from '../assets/svg/skills/kotlin.svg';
import memsql from '../assets/svg/skills/memsql.svg';
import mongoDB from '../assets/svg/skills/mongoDB.svg';
import mysql from '../assets/svg/skills/mysql.svg';
import nextJS from '../assets/svg/skills/nextJS.svg';
import nginx from '../assets/svg/skills/nginx.svg';
import numpy from '../assets/svg/skills/numpy.svg';
import nuxtJS from '../assets/svg/skills/nuxtJS.svg';
import opencv from '../assets/svg/skills/opencv.svg';
import photoshop from '../assets/svg/skills/photoshop.svg';
import php from '../assets/svg/skills/php.svg';
import postgresql from '../assets/svg/skills/postgresql.svg';
import python from '../assets/svg/skills/python.svg';
import pytorch from '../assets/svg/skills/pytorch.svg';
import react from '../assets/svg/skills/react.svg';
import ruby from '../assets/svg/skills/ruby.svg';
import svelte from '../assets/svg/skills/svelte.svg';
import tailwind from '../assets/svg/skills/tailwind.svg';
import tensorflow from '../assets/svg/skills/tensorflow.svg';
import typescript from '../assets/svg/skills/typescript.svg';
import vitejs from '../assets/svg/skills/vitejs.svg';
import vue from '../assets/svg/skills/vue.svg';
import vuetifyjs from '../assets/svg/skills/vuetifyjs.svg';
import oracle from '../assets/svg/skills/oracle.svg'
import nodejs from '../assets/svg/skills/nodejs.svg'
import nestjs from '../assets/svg/skills/nestjs.svg'
import springboot from '../assets/svg/skills/spring-boot.svg'
import kubernetes from '../assets/svg/skills/kubernetes.svg'
import jenkins from '../assets/svg/skills/jenkins.svg'
import kafka from '../assets/svg/skills/kafka.svg'

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'springboot':
      return springboot;
    case 'nestjs':
      return nestjs;
    case 'nodejs':
      return nodejs;
    case 'oracle':
      return oracle;
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'pytorch':
      return pytorch;
    case 'tensorflow':
      return tensorflow;
    case 'azure':
      return azure;
    case 'fastify':
      return fastify;
    case 'kubernetes':
      return kubernetes;
    case 'jenkins':
      return jenkins;
    case 'kafka':
      return kafka;
    default:
      break;
  }
}
