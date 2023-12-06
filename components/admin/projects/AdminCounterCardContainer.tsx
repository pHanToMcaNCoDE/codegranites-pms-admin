'use client';
import React from 'react';
import CounterCard from '../card/CounterCard';
import { PROJECT_COUNTERS } from '../../../libs/projects';

const AdminCounterCardContainer = () => {
	return (
		<div className="w-full flex flex-nowrap justify-evenly gap-4 pt-8">
			{PROJECT_COUNTERS.map((counter) => (
				<CounterCard key={counter.label} count={counter.count} label={counter.label} />
			))}
		</div>
	);
};

export default AdminCounterCardContainer;