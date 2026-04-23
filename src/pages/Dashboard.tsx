import { Navbar } from "@/components/Navbar";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { TrendingUp, Plus, Ban, CreditCard, Calendar, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const todayBookings = [
  { time: "6:00 AM", name: "Aman Verma", sport: "Cricket", status: "confirmed", amount: 800 },
  { time: "9:00 AM", name: "Rohit Singh", sport: "Football", status: "confirmed", amount: 1200 },
  { time: "5:00 PM", name: "Priya Das", sport: "Badminton", status: "pending", amount: 450 },
  { time: "7:00 PM", name: "Vikash K.", sport: "Cricket", status: "confirmed", amount: 800 },
  { time: "9:00 PM", name: "Anil M.", sport: "Football", status: "cancelled", amount: 0 },
];

const revenueData = [
  { d: "Wk 1", v: 18400 },
  { d: "Wk 2", v: 24200 },
  { d: "Wk 3", v: 21800 },
  { d: "Wk 4", v: 31500 },
];

const HOURS = ["6AM", "8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM", "10PM"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const slotState = (d: number, h: number) => {
  const v = (d * 13 + h * 7) % 5;
  if (v === 0) return "cancelled";
  if (v === 1) return "pending";
  if (v < 4) return "confirmed";
  return "open";
};

const stateClass: Record<string, string> = {
  confirmed: "bg-success text-white",
  pending: "bg-warning text-foreground",
  cancelled: "bg-destructive text-white",
  open: "bg-secondary text-muted-foreground",
};

const Dashboard = () => (
  <div className="min-h-screen flex flex-col bg-background-soft">
    <Navbar />

    <main className="container mx-auto container-px py-8 md:py-10 flex-1">
      <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
        <div>
          <p className="text-muted-foreground text-sm font-medium">Greenfield Box Cricket • Dhanbad</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold mt-1">Welcome back, Rohit 👋</h1>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm"><Plus className="h-4 w-4" /> Add slot</Button>
          <Button variant="outline" size="sm"><Ban className="h-4 w-4" /> Block time</Button>
          <Button variant="hero" size="sm"><CreditCard className="h-4 w-4" /> Payments</Button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Today's bookings", value: "4", sub: "+1 vs yesterday", icon: Calendar, color: "bg-accent/15 text-primary" },
          { label: "Today's revenue", value: "₹2,800", sub: "+12%", icon: TrendingUp, color: "bg-success/15 text-success" },
          { label: "Pending confirmations", value: "1", sub: "Awaiting your action", icon: Clock, color: "bg-warning/20 text-warning" },
          { label: "Occupancy rate", value: "78%", sub: "Best in your area", icon: TrendingUp, color: "bg-primary/10 text-primary" },
        ].map((s) => (
          <div key={s.label} className="bg-card rounded-2xl p-5 border border-border shadow-card">
            <div className="flex justify-between items-start">
              <div className={`h-10 w-10 rounded-xl grid place-items-center ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
            </div>
            <p className="font-display text-3xl font-bold mt-3">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="text-xs text-success font-semibold mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        {/* Weekly calendar */}
        <div className="bg-card rounded-2xl border border-border shadow-card p-5 sm:p-6">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <h2 className="font-display text-xl font-bold">This week's schedule</h2>
            <div className="flex gap-3 text-xs flex-wrap">
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-success" /> Confirmed</span>
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-warning" /> Pending</span>
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-destructive" /> Cancelled</span>
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-secondary border border-border" /> Open</span>
            </div>
          </div>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-[60px_repeat(9,1fr)] gap-1 mb-1">
                <div />
                {HOURS.map((h) => <div key={h} className="text-xs text-center font-semibold text-muted-foreground">{h}</div>)}
              </div>
              {DAYS.map((d, di) => (
                <div key={d} className="grid grid-cols-[60px_repeat(9,1fr)] gap-1 mb-1">
                  <div className="text-xs font-bold text-foreground flex items-center">{d}</div>
                  {HOURS.map((_, hi) => {
                    const st = slotState(di, hi);
                    return (
                      <div key={hi} className={`h-9 rounded-md ${stateClass[st]}`} title={st} />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue chart */}
        <div className="bg-card rounded-2xl border border-border shadow-card p-5 sm:p-6">
          <p className="text-sm text-muted-foreground font-medium">Revenue this month</p>
          <p className="font-display text-4xl font-bold mt-1">₹95,900</p>
          <p className="text-sm text-success font-semibold flex items-center gap-1 mt-1">
            <TrendingUp className="h-4 w-4" /> +28% vs last month
          </p>
          <div className="h-44 mt-4 -mx-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis dataKey="d" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid hsl(var(--border))" }} />
                <Line type="monotone" dataKey="v" stroke="hsl(var(--accent))" strokeWidth={3} dot={{ fill: "hsl(var(--primary))", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Today's bookings */}
      <div className="mt-6 bg-card rounded-2xl border border-border shadow-card p-5 sm:p-6">
        <h2 className="font-display text-xl font-bold mb-4">Today's bookings</h2>
        <div className="divide-y divide-border">
          {todayBookings.map((b) => (
            <div key={b.time} className="py-4 flex items-center gap-4 flex-wrap">
              <div className="bg-secondary px-3 py-2 rounded-lg font-display font-bold text-sm w-20 text-center">{b.time}</div>
              <div className="flex-1 min-w-[120px]">
                <p className="font-semibold">{b.name}</p>
                <p className="text-xs text-muted-foreground">{b.sport}</p>
              </div>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                b.status === "confirmed" ? "bg-success/15 text-success" :
                b.status === "pending" ? "bg-warning/20 text-warning" :
                "bg-destructive/15 text-destructive"
              }`}>{b.status}</span>
              <span className="font-display font-bold w-20 text-right">₹{b.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </main>

    <WhatsAppFab />
  </div>
);

export default Dashboard;
