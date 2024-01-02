"use client";
import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { schedule } from '../data/schedule'

const days = [
    { date: '2024-12-27' },
    { date: '2024-12-28' },
    { date: '2024-12-29' },
    { date: '2024-12-30' },
    { date: '2024-12-31' },
    { date: '2024-01-01', isCurrentMonth: true, isToday: true },
    { date: '2024-01-02', isCurrentMonth: true },
    { date: '2024-01-03', isCurrentMonth: true },
    { date: '2024-01-04', isCurrentMonth: true },
    { date: '2024-01-05', isCurrentMonth: true },
    { date: '2024-01-06', isCurrentMonth: true },
    { date: '2024-01-07', isCurrentMonth: true },
    { date: '2024-01-08', isCurrentMonth: true },
    { date: '2024-01-09', isCurrentMonth: true },
    { date: '2024-01-10', isCurrentMonth: true },
    { date: '2024-01-11', isCurrentMonth: true },
    { date: '2024-01-12', isCurrentMonth: true, isSelected: true },
    { date: '2024-01-13', isCurrentMonth: true },
    { date: '2024-01-14', isCurrentMonth: true },
    { date: '2024-01-15', isCurrentMonth: true },
    { date: '2024-01-16', isCurrentMonth: true },
    { date: '2024-01-17', isCurrentMonth: true },
    { date: '2024-01-18', isCurrentMonth: true },
    { date: '2024-01-19', isCurrentMonth: true },
    { date: '2024-01-20', isCurrentMonth: true },
    { date: '2024-01-21', isCurrentMonth: true },
    { date: '2024-01-22', isCurrentMonth: true },
    { date: '2024-01-23', isCurrentMonth: true },
    { date: '2024-01-24', isCurrentMonth: true },
    { date: '2024-01-25', isCurrentMonth: true },
    { date: '2024-01-26', isCurrentMonth: true },
    { date: '2024-01-27', isCurrentMonth: true, isSelected: true },
    { date: '2024-01-28', isCurrentMonth: true },
    { date: '2024-01-29', isCurrentMonth: true },
    { date: '2024-01-30', isCurrentMonth: true },
    { date: '2024-01-31', isCurrentMonth: true },
    { date: '2024-02-01' },
    { date: '2024-02-02', isSelected: true },
    { date: '2024-02-03' },
    { date: '2024-02-04' },
    { date: '2024-02-05' },
    { date: '2024-02-06' },
    { date: '2024-02-07' },
    { date: '2024-02-08' },
    { date: '2024-02-09', isSelected: true }
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Schedule() {
    return (
        <>
            <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 font-manrope">
                <div className="md:pr-14">
                    <div className="flex items-center">
                        <h2 className="flex-auto text-sm font-semibold">January 2024</h2>
                        <button
                            type="button"
                            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-white hover:text-amber-500"
                        >
                            <span className="sr-only">Previous month</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-white hover:text-amber-500"
                        >
                            <span className="sr-only">Next month</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6">
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>
                        <div>F</div>
                        <div>S</div>
                        <div>S</div>
                    </div>
                    <div className="mt-2 grid grid-cols-7 text-sm">
                        {days.map((day, dayIdx) => (
                            <div key={day.date} className={classNames(dayIdx > 6 && 'border-t border-gray-200', 'py-2')}>
                                <button
                                    type="button"
                                    className={classNames(
                                        day.isSelected && 'text-white',
                                        !day.isSelected && day.isToday && 'text-indigo-600',
                                        !day.isSelected && !day.isToday && day.isCurrentMonth && 'text-white',
                                        !day.isSelected && !day.isToday && !day.isCurrentMonth && 'text-white/50',
                                        day.isSelected && day.isToday && 'bg-indigo-600',
                                        day.isSelected && !day.isToday && 'bg-gray-900',
                                        !day.isSelected && 'hover:bg-amber-500',
                                        (day.isSelected || day.isToday) && 'font-semibold',
                                        'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                    )}
                                >
                                    <time dateTime={day.date}>{day.date.split('-').pop().replace(/^0/, '')}</time>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <section className="mt-12 md:mt-0 md:pl-14">
                    <h2 className="text-base font-semibold leading-6 text-white">
                        Upcoming Games
                    </h2>
                    <ol className="mt-4 space-y-1 text-sm leading-6 text-white">
                        {schedule.map((game) => (
                            <li
                                key={game.id}
                                className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-amber-500"
                            >
                                <img src={game.logo} alt="" className="h-10 w-10 flex-none rounded-full" />
                                <div className="flex-auto">
                                    <p className="text-white">{game.opponent}</p>
                                    <p className="mt-0.5 text-gray-500">
                                        <time dateTime={game.date}>{game.date} @ {game.time}</time>
                                    </p>
                                </div>
                                <Menu as="div" className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
                                    <div>
                                        <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                                            <span className="sr-only">Open options</span>
                                            <EllipsisVerticalIcon className="h-6 w-6" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </li>
                        ))}
                    </ol>
                </section>
            </div>
        </>
    )
}
