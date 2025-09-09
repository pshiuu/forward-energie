# forward-energie Development Guidelines

Auto-generated from feature plans. Last updated: 2025-09-09

## Project Overview
Energy pricing website built with xAtom and Webflow, featuring realtime price updates and interactive charts.

## Active Technologies
- **TypeScript**: Core language with xAtom Core v1.0.12
- **xAtom Framework**: @xatom/core v1.0.12, @xatom/build-tool v1.0.5  
- **Chart.js**: v4.4.9 for energy price visualization
- **AnimJS**: v4.0.1 for smooth transitions
- **Webflow**: "forward-energie" subdomain for design system

## Project Structure
```
src/
├── modules/
│   ├── energyPriceChart.ts        # Existing chart functionality
│   ├── realtime-energy-data/      # New: WebSocket data fetching
│   ├── enhanced-chart/            # New: Chart enhancements
│   └── connection-status/         # New: Network error handling
├── services/                      # API integration services
├── types/                         # TypeScript type definitions
└── utils/                         # Shared utilities

tests/
├── contract/                      # API contract tests
├── integration/                   # Chart integration tests
└── unit/                         # Component unit tests
```

## Development Commands
```bash
npm run start     # Start xAtom dev server on port 3020
npm run build     # Build for production
npm test          # Run test suite (when implemented)
```

## xAtom Framework Patterns

### Module Structure
- Use `onReady()` from @xatom/core for initialization
- Follow existing pattern in src/modules/
- Export module functions for testability

### Example Module Pattern
```typescript
import { onReady } from "@xatom/core";

export function initModuleName() {
  // Module initialization logic
}

onReady(() => {
  initModuleName();
});
```

### Webflow Integration
- Webflow subdomain: "forward-energie" (configured in xatom.json)
- Development server runs on localhost:3020
- Scripts injected with xa-script attribute

## Energy Pricing Domain

### Data Flow
1. **Historical Data**: REST API → Chart display + localStorage cache
2. **Realtime Updates**: WebSocket → Chart updates + UI notifications
3. **Error Handling**: Connection loss → Cached data + Status indicators

### Chart.js Integration
- Existing Chart.js v4.4.9 instance in energyPriceChart.ts
- German timezone handling (CET/CEST) already implemented
- Smooth animations with 60fps target

### Key Entities
- **EnergyPrice**: price, timestamp, marketRegion, energyType
- **ConnectionStatus**: connection state, latency, data quality
- **MarketRegion**: DE (Germany) primary, expandable

## Testing Strategy

### TDD Requirements (Non-negotiable)
1. Write failing tests first (RED phase)
2. Implement minimal code to pass (GREEN phase) 
3. Refactor while maintaining tests (REFACTOR phase)
4. Use real dependencies (actual APIs, Chart.js instances)

### Test Types (in order)
1. **Contract Tests**: API endpoint schemas and WebSocket messages
2. **Integration Tests**: Chart updates, data flow, error handling
3. **E2E Tests**: Full user scenarios from quickstart.md
4. **Unit Tests**: Individual component logic

### Performance Targets
- Initial load: < 2 seconds
- Realtime updates: < 500ms
- Chart interactions: < 100ms
- 60fps animations

## Error Handling Patterns

### Graceful Degradation
- Always show last known data when connections fail
- Clear visual indicators for stale/cached data
- Automatic reconnection with exponential backoff
- No application crashes or blank screens

### Connection Management
- WebSocket primary, polling fallback
- Heartbeat every 30 seconds
- Reconnect: 1s, 2s, 4s, 8s, 16s, 30s (max)

## Code Style

### TypeScript
- Strict type checking enabled
- Interface definitions for all data structures
- Avoid 'any' types - use proper type definitions

### xAtom Conventions
- Module exports for initialization functions
- Use existing Chart.js patterns from energyPriceChart.ts
- Maintain German timezone handling consistency

## Recent Changes
- 001-create-a-website: Added realtime WebSocket integration, enhanced Chart.js functionality, connection status management

<!-- MANUAL ADDITIONS START -->
<!-- Add project-specific notes here - this section is preserved during updates -->
<!-- MANUAL ADDITIONS END -->