"use client";

import React from "react";
import ProductStackShowcase from "./ProductStackShowcase";
import {
  FLOW_METERS_SHOWCASE_CONFIG,
  ProductShowcaseConfig,
  StackShowcaseCard,
  ClosingStatCard,
} from "./showcase-configs";

export type StackCardData = StackShowcaseCard;
export const FLOW_METER_STACK_CARDS = FLOW_METERS_SHOWCASE_CONFIG.cards;

export default function FlowMetersStackShowcase() {
  return <ProductStackShowcase config={FLOW_METERS_SHOWCASE_CONFIG} />;
}
