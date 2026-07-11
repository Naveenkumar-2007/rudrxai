"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { RoiConfig } from "@/types/solutions"

export function RoiCalculator({ config }: { config?: RoiConfig }) {
  const defaultConf = config || { defaultEmployees: 5, defaultHourlyRate: 40, defaultHoursPerWeek: 40, efficiencyGainPercentage: 0.3 }
  
  const [employees, setEmployees] = useState(defaultConf.defaultEmployees)
  const [hourlyRate, setHourlyRate] = useState(defaultConf.defaultHourlyRate)
  
  const monthlyHours = employees * defaultConf.defaultHoursPerWeek * 4
  const currentMonthlyCost = monthlyHours * hourlyRate
  const estimatedSavings = currentMonthlyCost * defaultConf.efficiencyGainPercentage
  
  return (
    <div className="bg-surface border border-border p-8 rounded-2xl">
      <h3 className="text-2xl font-heading font-bold text-foreground mb-6">ROI Calculator</h3>
      
      <div className="space-y-6 mb-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-muted-foreground">Team Size (Employees)</label>
            <span className="text-sm font-bold text-primary">{employees}</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="100" 
            value={employees}
            onChange={(e) => setEmployees(parseInt(e.target.value))}
            className="w-full accent-primary"
          />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-muted-foreground">Average Hourly Rate ($)</label>
            <span className="text-sm font-bold text-primary">${hourlyRate}/hr</span>
          </div>
          <input 
            type="range" 
            min="15" 
            max="150" 
            value={hourlyRate}
            onChange={(e) => setHourlyRate(parseInt(e.target.value))}
            className="w-full accent-primary"
          />
        </div>
      </div>
      
      <div className="pt-6 border-t border-border grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Current Monthly Cost</p>
          <p className="text-2xl font-bold text-foreground">${currentMonthlyCost.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-primary font-medium mb-1">Estimated Monthly Savings</p>
          <motion.p 
            key={estimatedSavings}
            initial={{ scale: 1.1, color: "#fff" }}
            animate={{ scale: 1, color: "#10b981" }}
            className="text-3xl font-bold font-heading text-success"
          >
            ${Math.round(estimatedSavings).toLocaleString()}
          </motion.p>
        </div>
      </div>
    </div>
  )
}
