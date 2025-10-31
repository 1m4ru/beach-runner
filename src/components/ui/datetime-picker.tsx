"use client"

import { format } from "date-fns";
import { useCallback, useState } from "react"
import { Button } from "./button";
import { CalendarIcon, Clock } from "lucide-react";
import { Calendar } from "./calendar";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export function DateTimePicker({
value,
onChange,
}: {
value?: Date,
onChange: (date: Date) => void
}) {
    const [date, setDate] = useState<Date | undefined>(value);
    const [time, setTime] = useState(
        value ? format(value, "HH:mm") : "12:00"
    );
    const updateDateTime = useCallback(
        (newDate?: Date, newTime?: string) => {
          const currentDate = newDate ?? date
          const currentTime = newTime ?? time
    
          if (!currentDate) return
    
          const [hours, minutes] = currentTime.split(":").map(Number)
          const merged = new Date(currentDate)
          merged.setHours(hours)
          merged.setMinutes(minutes)
    
          setDate(merged)
          setTime(currentTime)
          onChange?.(merged)
        },
        [date, time, onChange]
      )
    
      const handleDateSelect = (selected: Date | undefined) => updateDateTime(selected)
      const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => updateDateTime(undefined, e.target.value)

    return (
        <div className="flex flex-col gap-2 mt-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "dd/MM/yyyy") : "Selecionar data"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
            />
          </PopoverContent>
        </Popover>
  
        <div className="flex items-center gap-2">
          <Input type="time" value={time} onChange={handleTimeChange} />
        </div>
      </div>
    )
}