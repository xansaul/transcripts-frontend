import React from 'react'
import { SkeletonCard } from '../cards/SkeletonCard'

export const VideosGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
    </div>
  )
}
