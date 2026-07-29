"use client";

import { useState } from "react";

import CareersHero from "@/components/CareersHero";
import JobCategories from "@/components/JobCategories";
import FeaturedJobs from "@/components/FeaturedJobs";
import HiringProcess from "@/components/HiringProcess";
import WhyJoinUs from "@/components/WhyJoinUs";
import CareersFAQ from "@/components/CareersFAQ";
import CareersCTA from "@/components/CareersCTA";

export default function CareersPage() {

  const [searchTerm, setSearchTerm] = useState("");
 const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <main>

      <CareersHero
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>

<JobCategories
  setSelectedCategory={setSelectedCategory}
/>

<FeaturedJobs
  searchTerm={searchTerm}
  selectedCategory={selectedCategory}
/>

      <HiringProcess />

      <WhyJoinUs />

      <CareersFAQ />

      <CareersCTA />

    </main>
  );
}