#!/usr/bin/env node
/** Merge final batch of hero titles/descriptions into tmp/live-hero.json */
import { parseHeroMarkdown, mergeResults } from "./merge-live-hero.mjs";

const entries = [
  {
    key: "greenlee-county-az/clifton",
    heroTitle: "Clifton Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Clifton, Arizona. Our experienced mortgage brokers in Clifton AZ work.",
  },
  {
    key: "greenlee-county-az/duncan",
    heroTitle: "Duncan Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Duncan, Arizona. Our experienced mortgage brokers in Duncan AZ work.",
  },
  {
    key: "greenlee-county-az/morenci",
    heroTitle: "Morenci Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Morenci, Arizona. Our experienced mortgage brokers in Parker AZ work.",
  },
  {
    key: "la-paz-county-az/parker",
    heroTitle: "Parker Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Parker, Arizona. Our experienced mortgage brokers in Parker AZ work.",
  },
  {
    key: "la-paz-county-az/quartzsite",
    heroTitle: "Quartzsite Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Quartzsite, Arizona. Our experienced mortgage brokers in Quartzsite AZ work.",
  },
  {
    key: "maricopa-county-az/anthem",
    heroTitle: "Anthem Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Helping Anthem homebuyers and homeowners secure the right mortgage with clear guidance, competitive rates, and fast pre-approvals - without pressure or confusion.",
  },
  {
    key: "maricopa-county-az/apache-junction",
    heroTitle: "Apache Junction Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Helping Apache Junction homebuyers and homeowners secure the right mortgage with clear guidance, competitive rates, and fast pre-approvals - without pressure or confusion.",
  },
  {
    key: "maricopa-county-az/avondale",
    heroTitle: "Avondale Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions for Avondale homebuyers and homeowners. Competitive rates, clear guidance, and fast approvals-supported by strong local Avondale and Maricopa County lending expertise.",
  },
  {
    key: "maricopa-county-az/buckeye",
    heroTitle: "Buckeye Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Helping Buckeye homebuyers and homeowners secure the right mortgage with clear guidance, competitive rates, and fast pre-approvals - without pressure or confusion.",
  },
  {
    key: "maricopa-county-az/carefree",
    heroTitle: "Carefree Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Helping Carefree homebuyers and homeowners secure the right mortgage with clear guidance, competitive rates, and fast pre-approvals - without pressure or confusion.",
  },
  {
    key: "maricopa-county-az/cave-creek",
    heroTitle: "Cave Creek Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Helping Cave Creek homebuyers and homeowners secure the right mortgage with clear guidance, competitive rates, and fast pre-approvals - without pressure or confusion.",
  },
  {
    key: "maricopa-county-az/chandler",
    heroTitle: "Chandler Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions, competitive rates, and expert guidance for every Chandler neighborhood.",
  },
  {
    key: "maricopa-county-az/fountain-hills",
    heroTitle: "Fountain Hills Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Helping Fountain Hills homebuyers and homeowners secure the right mortgage with clear guidance, competitive rates, and fast pre-approvals - without pressure or confusion.",
  },
  {
    key: "maricopa-county-az/gilbert",
    heroTitle: "Gilbert Mortgage Experts - Your Local Home Loan Partner",
    heroDescription:
      "At AZ Mortgage Brothers, we help Gilbert homebuyers, homeowners, and real estate investors secure competitive mortgage solutions with clear guidance at every step.",
  },
  {
    key: "maricopa-county-az/glendale",
    heroTitle: "Glendale Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions for Glendale homebuyers and homeowners. Competitive rates, clear guidance, and fast approvals-backed by deep local market knowledge.",
  },
  {
    key: "maricopa-county-az/goodyear",
    heroTitle: "Goodyear Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions for Goodyear homebuyers and homeowners. Competitive rates, clear guidance, and fast approvals-supported by deep Goodyear and Maricopa County market expertise.",
  },
  {
    key: "maricopa-county-az/guadalupe",
    heroTitle: "Guadalupe Mortgage Experts - Local Home Loan Guidance",
    heroDescription:
      "Helping Guadalupe homebuyers and homeowners secure the right mortgage with clear guidance, competitive options, and a simple, stress-free process - without pressure or confusion.",
  },
  {
    key: "maricopa-county-az/litchfield-park",
    heroTitle: "Litchfield Park Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Helping Litchfield Park homebuyers and homeowners secure the right mortgage with clear guidance, competitive options, and fast pre-approvals - without pressure or confusion.",
  },
  {
    key: "maricopa-county-az/mesa",
    heroTitle: "Mesa Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions, competitive rates, and expert guidance for every Mesa neighborhood",
  },
  {
    key: "maricopa-county-az/paradise-valley",
    heroTitle: "Paradise Valley Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Helping Paradise Valley homebuyers and homeowners secure the right mortgage with clear guidance, competitive rates, and fast pre-approvals - without pressure or confusion.",
  },
  {
    key: "maricopa-county-az/peoria",
    heroTitle: "Peoria Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions for Peoria homebuyers and homeowners. Competitive rates, clear guidance, and fast approvals from local mortgage professionals.",
  },
  {
    key: "maricopa-county-az/phoenix",
    heroTitle: "Phoenix Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions, competitive rates, and expert guidance for every Phoenix neighborhood",
  },
  {
    key: "maricopa-county-az/queen-creek",
    heroTitle: "Queen Creek Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Helping Queen Creek homebuyers and homeowners secure the right mortgage with clear guidance, competitive options, and fast pre-approvals - without pressure or confusion.",
  },
  {
    key: "maricopa-county-az/scottsdale",
    heroTitle: "Scottsdale Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions, competitive rates, and expert guidance for every Scottsdale neighborhood",
  },
  {
    key: "maricopa-county-az/sun-city",
    heroTitle: "Sun City Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Helping Sun City homeowners secure the right mortgage solutions with clear guidance, competitive options, and a smooth, stress-free process - without pressure or confusion.",
  },
  {
    key: "maricopa-county-az/sun-city-west",
    heroTitle: "Sun City West Mortgage Experts - Trusted Home Loan Guidance",
    heroDescription:
      "Helping Sun City West homeowners secure the right mortgage solutions with clear guidance, competitive options, and a smooth, stress-free process - without pressure or confusion",
  },
  {
    key: "maricopa-county-az/surprise",
    heroTitle: "Surprise Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Helping Surprise homebuyers and homeowners secure the right mortgage with clear guidance, competitive rates, and fast pre-approvals - without pressure or confusion.",
  },
  {
    key: "maricopa-county-az/tempe",
    heroTitle: "Tempe Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions for Tempe homebuyers and homeowners. Competitive rates, clear guidance, and fast approvals-supported by deep Tempe market expertise.",
  },
  {
    key: "maricopa-county-az/wickenburg",
    heroTitle: "Wickenburg Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Helping Wickenburg homebuyers and homeowners secure the right mortgage with clear guidance, competitive rates, and fast pre-approvals - without pressure or confusion.",
  },
  {
    key: "mohave-county-az/bullhead-city",
    heroTitle: "Bullhead City Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Bullhead City, Arizona. Our experienced mortgage brokers in Bullhead City AZ work with multiple lenders.",
  },
  {
    key: "mohave-county-az/chloride",
    heroTitle: "Chloride Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Chloride, Arizona. Our experienced mortgage brokers in Chloride AZ work with multiple lenders.",
  },
  {
    key: "mohave-county-az/colorado-city",
    heroTitle: "Colorado City Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Colorado City, Arizona. Our experienced mortgage brokers in Colorado City AZ work with multiple lenders.",
  },
  {
    key: "mohave-county-az/fort-mohave",
    heroTitle: "Fort Mohave Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Fort Mohave, Arizona. Our experienced mortgage brokers in Fort Mohave AZ work with multiple lenders.",
  },
  {
    key: "mohave-county-az/kingman",
    heroTitle: "Kingman Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides reliable mortgage solutions for homebuyers and homeowners throughout Kingman, Arizona. Our experienced mortgage brokers in Kingman AZ work with multiple lenders.",
  },
  {
    key: "mohave-county-az/lake-havasu-city",
    heroTitle: "Lake Havasu City Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Lake Havasu City, Arizona. Our experienced mortgage brokers in Lake Havasu City AZ work with multiple lenders.",
  },
  {
    key: "navajo-county-az/holbrook",
    heroTitle: "Holbrook Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides reliable mortgage solutions for homebuyers and homeowners throughout Holbrook, Arizona. Our experienced mortgage brokers in Holbrook AZ work with multiple lenders.",
  },
  {
    key: "navajo-county-az/show-low",
    heroTitle: "Show Low Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides reliable mortgage solutions for homebuyers and homeowners throughout Show Low, Arizona. Our experienced mortgage brokers in Show Low AZ work with multiple lenders.",
  },
  {
    key: "navajo-county-az/taylor",
    heroTitle: "Taylor Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides reliable mortgage solutions for homebuyers and homeowners throughout Taylor, AZ. Our experienced mortgage brokers in Taylor AZ work with multiple lenders.",
  },
  {
    key: "navajo-county-az/winslow",
    heroTitle: "Winslow Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides reliable mortgage solutions for homebuyers and homeowners throughout Winslow, AZ. Our experienced mortgage brokers in Winslow AZ work with multiple lenders.",
  },
  {
    key: "pima-county-az/oro-valley",
    heroTitle: "Oro Valley Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Oro Valley, Arizona. Our experienced mortgage brokers in Oro Valley AZ work with multiple lenders.",
  },
  {
    key: "pima-county-az/sahuarita",
    heroTitle: "Sahuarita Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Sahuarita, Arizona.",
  },
  {
    key: "pima-county-az/tucson",
    heroTitle: "Tucson Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Tucson, Arizona. Our experienced mortgage brokers in Tucson AZ work with multiple lenders",
  },
  {
    key: "pima-county-az/vail",
    heroTitle: "Vail Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Vail, Arizona. Our experienced mortgage brokers in Vail AZ work with multiple lenders.",
  },
  {
    key: "pinal-county-az/apache-junction",
    heroTitle: "Apache Junction Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions, competitive rates, and expert guidance for homebuyers and homeowners in Apache Junction, AZ and surrounding East Valley areas.",
  },
  {
    key: "pinal-county-az/casa-grande",
    heroTitle: "Casa Grande Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions, competitive rates, and expert guidance for homebuyers and homeowners in Casa Grande, AZ and surrounding Pinal County areas.",
  },
  {
    key: "pinal-county-az/coolidge",
    heroTitle: "Coolidge Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions, competitive rates, and expert guidance for homebuyers and homeowners in Coolidge, AZ and surrounding Pinal County areas.",
  },
  {
    key: "pinal-county-az/florence",
    heroTitle: "Florence Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions, competitive rates, and expert guidance for homebuyers and homeowners in Florence, AZ and surrounding Pinal County areas.",
  },
  {
    key: "pinal-county-az/san-tan-valley",
    heroTitle: "San Tan Valley Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "Personalized mortgage solutions, competitive rates, and expert guidance for homebuyers and homeowners in San Tan Valley, AZ and surrounding Pinal County areas.",
  },
  {
    key: "santa-cruz-county-az/santa-cruz",
    heroTitle: "Santa Cruz AZ Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners across Santa Cruz County, Arizona. Our experienced mortgage brokers work.",
  },
  {
    key: "yavapai-county-az/chino-valley",
    heroTitle: "Chino Valley Mortgages - Your Trusted Mortgage Broker in Chino Valley",
    heroDescription:
      "Expert Chino Valley mortgages, competitive mortgage rates, and personalized home loan solutions for buyers and homeowners in Chino Valley, AZ and surrounding Yavapai County areas.",
  },
  {
    key: "yavapai-county-az/clarkdale",
    heroTitle: "Clarkdale Mortgage - Your Local Mortgage Experts",
    heroDescription:
      "Expert Clarkdale mortgage solutions, competitive mortgage rates, and personalized home loan options for buyers and homeowners in Clarkdale, AZ and surrounding Yavapai County areas.",
  },
  {
    key: "yavapai-county-az/cornville",
    heroTitle: "Cornville Mortgage - Your Local Mortgage Experts",
    heroDescription:
      "Expert Cornville mortgage solutions, competitive mortgage rates, and personalized home loan options for buyers and homeowners in Cornville, AZ and surrounding Yavapai County areas.",
  },
  {
    key: "yavapai-county-az/cottonwood",
    heroTitle: "Cottonwood Mortgages - Your Trusted Mortgage Broker in Cottonwood",
    heroDescription:
      "Expert Cottonwood mortgages, competitive mortgage rates, and personalized home loan solutions for buyers and homeowners in Cottonwood, AZ and surrounding Yavapai County areas.",
  },
  {
    key: "yavapai-county-az/jerome",
    heroTitle: "Jerome Mortgages - Your Local Mortgage Experts",
    heroDescription:
      "Expert Jerome mortgages, competitive mortgage rates, and personalized home loan solutions for buyers and homeowners in Jerome, Arizona.",
  },
  {
    key: "yavapai-county-az/prescott",
    heroTitle: "Prescott Mortgages - Your Local Mortgage Broker in Prescott",
    heroDescription:
      "Expert Prescott mortgages, competitive mortgage rates, and personalized home loan solutions for buyers and homeowners across Prescott, AZ and Yavapai County.",
  },
  {
    key: "yavapai-county-az/prescott-valley",
    heroTitle: "Prescott Valley Mortgages - Your Local Mortgage Experts",
    heroDescription:
      "Expert Prescott Valley mortgages, competitive mortgage rates, and personalized home loan solutions for buyers and homeowners in Prescott Valley, Arizona.",
  },
  {
    key: "yavapai-county-az/yavapai-hills",
    heroTitle: "Yavapai Hills Mortgages - Your Trusted Mortgage Broker in Yavapai Hills, Arizona",
    heroDescription:
      "Expert Yavapai Hills mortgages, competitive mortgage rates, and personalized home loan solutions for buyers and homeowners in Yavapai Hills, AZ and surrounding Prescott areas.",
  },
  {
    key: "yuma-county-az/san-luis",
    heroTitle: "San Luis Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout San Luis, Arizona. Our experienced mortgage brokers in San Luis AZ work.",
  },
  {
    key: "yuma-county-az/yuma",
    heroTitle: "Yuma Mortgage Experts - Your Local Home Loan Partners",
    heroDescription:
      "AZ Mortgage Brothers provides trusted mortgage solutions for homebuyers and homeowners throughout Yuma, Arizona. Our experienced mortgage brokers in Yuma AZ work .",
  },
];

const stats = mergeResults(entries);
console.log(JSON.stringify(stats, null, 2));
if (stats.missing.length) process.exit(1);
