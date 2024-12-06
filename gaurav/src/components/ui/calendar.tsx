import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayContent, DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;
function Calendar({
  punchDates = [],
  selectedDate,
  onDayClick,
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flonChangeex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2 gap-1",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: cn(
          buttonVariants({ variant: "outline" }),
          `h-10 w-10 md:h-12 md:w-16 font-normal aria-selected:opacity-100 hover:bg-white bg-white`,
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-blue-700 text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-blue-100 text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:tction Calendar({ punchDates = []ext-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
        DayContent({ ...props }) {
          const isPresent = punchDates.includes(props.date.toDateString());
          const isSelected = selectedDate && props.date.toString() === selectedDate.toString();
          return (
            <div
              {...props}
              className={cn(
                "flex justify-center items-center h-full w-full",
                isPresent ? "bg-green-500 p-4 md:bg-white md:text-black md:px-7 md:py-5 rounded-sm text-white" : "",
                isSelected ? "bg-blue-600 p-4 md:px-7 md:py-5 rounded-sm text-white" : "",
              )}
              onClick={() => onDayClick(props.date)}
            >
              <div className="flex flex-col justify-between items-center w-full">
                <div>
                  {isPresent ? (
                    <div className="text-xs font-bold px-1 -mt-1 w-full mx-5 items-center hidden md:block">
                      <span className="text-green-500 border-green-500 bg-green-100 px-1 rounded-sm">PI</span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {props.date.getDate()}
              </div>
            </div>
          );
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
