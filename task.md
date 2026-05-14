# 🚀 Frontend Wizards - Stage 5A

Build a real-time data visualization platform using Vue.js.

## 🎯 Objective

Build a high-performance real-time analytics dashboard that visualizes live-streaming data with smooth updates, advanced charts, and interactive insights.

The platform should simulate a modern monitoring and analytics system similar to:

- trading terminals
- DevOps monitoring dashboards
- cybersecurity analytics
- IoT telemetry platforms
- logistics tracking systems

This must feel like a production-grade real-time visualization platform.

## 🧠 What the Platform Should Do

The application must:

- receive real-time streaming data
- visualize updates instantly
- handle large datasets efficiently
- allow users to filter and inspect data
- present insights in a clean, highly interactive UI

The dashboard should feel alive.

## 🧩 Required Features

### 1. Real-Time Data Streaming

Your application must simulate or consume real-time data.

Accepted approaches:

- WebSockets
- Server-Sent Events (SSE)
- polling (least preferred)
- mocked streaming generator

Examples of live data:

- stock prices
- sensor metrics
- CPU/memory usage
- logistics movement
- crypto prices
- cybersecurity attacks
- website analytics

The UI must update dynamically without page refreshes.

### 2. Live Charts and Visualizations

The dashboard must include at least:

- line chart
- bar chart
- area chart
- real-time metric cards
- activity feed/table

Charts must:

- update smoothly
- avoid flickering
- support responsive layouts
- handle growing datasets efficiently

Bonus:

- heatmaps
- candlestick charts
- radar charts
- network graphs
- geographic visualizations

### 3. Interactive Dashboard Controls

Users must be able to:

- filter data
- pause or resume streaming
- change time ranges
- switch chart types
- inspect data points
- toggle datasets on or off

Examples:

- Last 1 min
- Last 5 mins
- Last 1 hour
- Real-time mode

### 4. Performance Optimization

This stage heavily evaluates frontend performance.

You must:

- prevent unnecessary re-renders
- efficiently handle streaming updates
- optimize chart rendering
- avoid memory leaks
- clean up subscriptions and listeners

Expected techniques:

- memoization
- virtualization
- throttling and debouncing
- Web Workers (optional)
- efficient state updates

### 5. Data Architecture

Your application must demonstrate clean frontend architecture.

Expected:

- centralized data handling
- reusable chart components
- modular folder structure
- typed data models
- scalable state management

Suggested tools:

- Zustand
- Redux Toolkit
- TanStack Query
- RxJS (optional)

### 6. Responsive UI

The dashboard must work properly on:

- desktop
- tablet
- mobile

Requirements:

- adaptive layouts
- usable charts on smaller screens
- readable typography
- proper spacing

### 7. Real-Time Activity Feed

Include a live-updating table or feed showing:

- recent events
- alerts
- logs
- transactions
- metric updates

Requirements:

- newest items appear first
- smooth updates
- timestamp formatting
- scroll handling

Bonus:

- severity indicators
- searchable logs
- filtering
- infinite scrolling

### 8. Error Handling and Resilience

Your app must gracefully handle:

- connection failures
- malformed data
- reconnect attempts
- loading states
- empty states

The UI should never crash due to bad incoming data.

## 📦 Technical Requirements

Must use:

- TypeScript
- component-based architecture

Must include:

- reusable chart components
- modular code organization
- clean state management
- proper loading and error states
- no console errors

Suggested libraries:

- Recharts
- ECharts
- D3.js
- Chart.js
- Visx
- TanStack Table

## 🔒 Security and Stability Requirements

You must:

- sanitize external data
- validate incoming payloads
- prevent memory leaks
- clean up intervals and listeners
- avoid unsafe DOM injection

Bonus:

- rate limiting
- reconnect backoff strategy
- payload schema validation

## 📱 UI/UX Expectations

The dashboard should feel modern and high-end.

Expected:

- smooth transitions
- polished charts
- responsive interactions
- clear hierarchy
- proper spacing
- dark and light mode support

Optional enhancements:

- command palette
- draggable widgets
- customizable layouts
- animated counters
- live notifications
- sound alerts
- keyboard shortcuts

## 🧪 Acceptance Criteria

You will be graded on:

- real-time updates working correctly
- smooth chart rendering
- performance under continuous updates
- clean architecture
- proper state management
- good UX polish
- responsiveness
- error handling
- efficient rendering strategy
- scalability of implementation

## 📦 Submission Requirements

Submit:

- GitHub repository
- README including:
  - setup instructions
  - architecture explanation
  - state management strategy
  - rendering optimization decisions
  - data streaming approach
  - trade-offs made

## 🏆 Evaluation Focus

This stage prioritizes:

- frontend architecture quality
- rendering performance
- real-time systems thinking
- scalability
- interaction design
- UI polish
- engineering maturity

## Submission Form

https://docs.google.com/forms/d/e/1FAIpQLScoAEuq1ACg5g9FcsRDtZlglEOYBGziTg-zOB5T-D-t4kgmRw/viewform?usp=dialog

Deadline: 11:59 AM, 15th May 2026
