'use client'

import React, { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from './lib/utils'
import { Button } from './components/ui/button'
import { Command, CommandGroup, CommandItem, CommandList } from './components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover'

const locations = [
  { value: 'home', label: 'Home' },
  { value: 'school', label: 'School' },
]

interface LocationDropdownProps {
  onSelectLocation: (location: 'home' | 'school') => void
}

const LocationDropdown: React.FC<LocationDropdownProps> = ({ onSelectLocation }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<string | null>('school')

  const handleSelect = (location: 'home' | 'school') => {
    onSelectLocation(location)
    setIsOpen(false) // Close dropdown after selection
  }

  return (
    <div className="absolute top-4 right-4 z-10">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-25 justify-center rounded-md bg-white/75 px-4 py-2 text-gray-200 shadow hover:bg-gray-100 dark:bg-black/75 dark:text-white dark:hover:bg-gray-600"
            role="combobox"
            aria-expanded={isOpen}
            aria-controls="location-list"
            aria-label="Select location"
          >
            {value ? locations.find((location) => location.value === value)?.label : 'Where?'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-25 p-0">
          <Command>
            <CommandList>
              <CommandGroup className="overflow-y-auto bg-white dark:bg-black">
                {locations.map((location) => (
                  <CommandItem
                    key={location.value}
                    value={location.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? '' : currentValue)
                      setIsOpen(false)
                      handleSelect(location.value as 'home' | 'school')
                    }}
                  >
                    {location.label}
                    <Check
                      className={cn(
                        'ml-auto',
                        value === location.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default LocationDropdown
