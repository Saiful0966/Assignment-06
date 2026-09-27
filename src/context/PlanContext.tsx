

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export interface Workout {
  id: string | number;
  name: string;
  image: string;
  duration: number | string;
  caloriesBurned: number | string;
  muscleGroups?: string[];
  equipment?: string;
}

interface PlanContextType {
  planList: Workout[];
  savedList: Workout[];
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromPlan: (id: string | number) => void;
  removeFromSaved: (id: string | number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [planList, setPlanList] = useState<Workout[]>([]);
  const [savedList, setSavedList] = useState<Workout[]>([]);

  //  LocalStorage theke data load kora
  useEffect(() => {
    const timer = setTimeout(() => {
      const savedPlan = localStorage.getItem("fitlog_plan");
      const savedSaved = localStorage.getItem("fitlog_saved");

      if (savedPlan) setPlanList(JSON.parse(savedPlan));
      if (savedSaved) setSavedList(JSON.parse(savedSaved));
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Plan-e jog kora
  const addToPlan = (workout: Workout) => {
    const exists = planList.some((item) => String(item.id) === String(workout.id));

    if (!exists) {
      const updated = [...planList, workout];
      setPlanList(updated);
      localStorage.setItem("fitlog_plan", JSON.stringify(updated));

      // Success Toast
      toast.success("Added to today's plan", {
        style: {
          background: "#181a20",
          color: "#ffffff",
          border: "1px solid #27272a",
        },
        iconTheme: {
          primary: "#88e700",
          secondary: "#000000",
        },
      });
    } else {
      // Error Toast
      toast.error("Already in your plan", {
        style: {
          background: "#181a20",
          color: "#ffffff",
          border: "1px solid #27272a",
        },
        iconTheme: {
          primary: "#ef4444",
          secondary: "#ffffff",
        },
      });
    }
  };

  // Saved-e jog kora
  const addToSaved = (workout: Workout) => {
    const exists = savedList.some((item) => String(item.id) === String(workout.id));

    if (!exists) {
      const updated = [...savedList, workout];
      setSavedList(updated);
      localStorage.setItem("fitlog_saved", JSON.stringify(updated));

      // Success Toast
      toast.success("Saved for later", {
        style: {
          background: "#181a20",
          color: "#ffffff",
          border: "1px solid #27272a",
        },
        iconTheme: {
          primary: "#88e700",
          secondary: "#000000",
        },
      });
    } else {
      // Error Toast
      toast.error("Already in saved list", {
        style: {
          background: "#181a20",
          color: "#ffffff",
          border: "1px solid #27272a",
        },
        iconTheme: {
          primary: "#ef4444",
          secondary: "#ffffff",
        },
      });
    }
  };

  // Plan theke remove kora 
  const removeFromPlan = (id: string | number) => {
    const updated = planList.filter((item) => String(item.id) !== String(id));
    setPlanList(updated);
    localStorage.setItem("fitlog_plan", JSON.stringify(updated));

    toast.error("Removed from today's plan", {
      style: {
        background: "#181a20",
        color: "#ffffff",
        border: "1px solid #27272a",
      },
      iconTheme: {
        primary: "#ef4444",
        secondary: "#ffffff",
      },
    });
  };

  // Saved theke remove kora 
  const removeFromSaved = (id: string | number) => {
    const updated = savedList.filter((item) => String(item.id) !== String(id));
    setSavedList(updated);
    localStorage.setItem("fitlog_saved", JSON.stringify(updated));

    toast.error("Removed from saved list", {
      style: {
        background: "#181a20",
        color: "#ffffff",
        border: "1px solid #27272a",
      },
      iconTheme: {
        primary: "#ef4444",
        secondary: "#ffffff",
      },
    });
  };

  return (
    <PlanContext.Provider
      value={{
        planList,
        savedList,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
};