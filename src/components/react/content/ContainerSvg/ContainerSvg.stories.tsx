import { Meta } from '@storybook/react';
import React from 'react';

import ContainerSvg from './ContainerSvg';

export default {
  title: 'React/Components/Content/ContainerSvg',
  component: ContainerSvg,
} as Meta;

export const Types = () => (
  <evg-grid wrap="wrap">
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Box" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Wheeled Bin" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Communal Wheeled Bin" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Inner Caddy" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Kerbside Caddy" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Kitchen Caddy" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Reusable Sack" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Householder Provided Carrier Bag" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Single Sack" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Large Wheeled Bin" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Skip" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Front End Load" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Rear End Loader" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Roll On Roll Off" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Single Food Caddy" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Single Box" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Single Carrier Bag" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Trolibocs" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Bundle" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Roll Cage" />
    </evg-grid-item>
  </evg-grid>
);

export const Trolibocs = () => (
  <evg-grid wrap="wrap">
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Trolibocs" bodyColour="pink" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg
        name="Trolibocs - Top box"
        bodyColour="green"
        lidColour="red"
      />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg
        name="Trolibocs - Middle box"
        bodyColour="green"
        lidColour="red"
      />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg
        name="Trolibocs - Bottom box"
        bodyColour="green"
        lidColour="red"
      />
    </evg-grid-item>
  </evg-grid>
);

export const Coloured = () => (
  <evg-grid wrap="wrap">
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Box" bodyColour="orange" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Wheeled Bin" bodyColour="yellow" lidColour="red" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg
        name="Communal Wheeled Bin"
        bodyColour="green"
        lidColour="red"
      />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg
        name="Inner Caddy"
        bodyColour="black"
        secondaryColour="pink"
      />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg
        name="Kerbside Caddy"
        bodyColour="green"
        lidColour="red"
        secondaryColour="yellow"
      />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg
        name="Kitchen Caddy"
        bodyColour="greenDark"
        lidColour="greenDark"
        secondaryColour="greyLight"
      />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg
        name="Reusable Sack"
        bodyColour="green"
        secondaryColour="blueDark"
      />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg
        name="Householder Provided Carrier Bag"
        bodyColour="orange"
        secondaryColour="duckEgg"
      />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Bundle" bodyColour="brown" />
    </evg-grid-item>
    <evg-grid-item small-mobile="12" small-tablet="3">
      <ContainerSvg name="Roll Cage" bodyColour="purple" />
    </evg-grid-item>
  </evg-grid>
);
