import React from 'react';
import ShoeGrid from '@/components/ShoeGrid';
import { pb } from '@/helpers/pocketbase';

async function CategoryPage({ params }) {
  const shoes = await pb.collection('shoes').getFullList({
    filter: `categories?~"${params.categorySlug}"`
  });

  return (
    <ShoeGrid shoes={shoes} />
  )
}

export default CategoryPage;
