import { Container, Grid, GridItem } from '@/components/layout/grid-container';

export default function GridDemoPage() {
  return (
    <div className='min-h-screen bg-background py-8'>
      <Container>
        <div className='mb-8'>
          <h1 className='text-3xl font-display text-primary mb-4'>
            Grid System Demo
          </h1>
          <p className='text-primary/70'>
            Based on Figma specs: 12 columns, 100px each, 32px gutters (1552px
            total width)
          </p>
        </div>

        {/* Grid visualization */}
        <div className='mb-12'>
          <h2 className='text-xl font-semibold mb-4'>Grid Visualization</h2>
          <Grid>
            {Array.from({ length: 12 }, (_, i) => (
              <GridItem key={i} span={1}>
                <div className='bg-primary/10 border border-primary/20 p-4 text-center text-sm'>
                  Col {i + 1}
                </div>
              </GridItem>
            ))}
          </Grid>
        </div>

        {/* Different span examples */}
        <div className='space-y-8'>
          <div>
            <h2 className='text-xl font-semibold mb-4'>Column Spans</h2>
            <Grid className='gap-4'>
              <GridItem span={6}>
                <div className='bg-accent/20 border border-accent p-4 text-center'>
                  6 Columns
                </div>
              </GridItem>
              <GridItem span={6}>
                <div className='bg-accent/20 border border-accent p-4 text-center'>
                  6 Columns
                </div>
              </GridItem>
            </Grid>
          </div>

          <div>
            <Grid className='gap-4'>
              <GridItem span={4}>
                <div className='bg-primary/20 border border-primary p-4 text-center'>
                  4 Columns
                </div>
              </GridItem>
              <GridItem span={4}>
                <div className='bg-primary/20 border border-primary p-4 text-center'>
                  4 Columns
                </div>
              </GridItem>
              <GridItem span={4}>
                <div className='bg-primary/20 border border-primary p-4 text-center'>
                  4 Columns
                </div>
              </GridItem>
            </Grid>
          </div>

          <div>
            <Grid className='gap-4'>
              <GridItem span={8}>
                <div className='bg-accent/30 border border-accent p-4 text-center'>
                  8 Columns (Main Content)
                </div>
              </GridItem>
              <GridItem span={4}>
                <div className='bg-primary/30 border border-primary p-4 text-center'>
                  4 Columns (Sidebar)
                </div>
              </GridItem>
            </Grid>
          </div>
        </div>

        {/* Layout example similar to Figma design */}
        <div className='mt-16'>
          <h2 className='text-xl font-semibold mb-4'>
            Figma Layout Recreation
          </h2>
          <Grid className='gap-8'>
            <GridItem span={2}>
              <div className='aspect-square bg-primary/10 rounded-lg flex items-center justify-center text-sm'>
                Decorative
              </div>
            </GridItem>
            <GridItem span={8}>
              <div className='bg-accent/10 rounded-lg p-8 text-center'>
                <h3 className='text-2xl font-display text-primary mb-4'>
                  Main Content Area
                </h3>
                <p className='text-primary/70 mb-6'>
                  This demonstrates the main content area that spans 8 columns,
                  similar to the Figma design layout.
                </p>
                <div className='aspect-video bg-primary/5 rounded-lg flex items-center justify-center'>
                  <span className='text-primary/50'>Image/Video Content</span>
                </div>
              </div>
            </GridItem>
            <GridItem span={2}>
              <div className='aspect-[3/4] bg-primary/10 rounded-lg flex items-center justify-center text-sm'>
                Side Element
              </div>
            </GridItem>
          </Grid>
        </div>

        {/* Start and End Props Testing */}
        <div className='mt-16'>
          <h2 className='text-xl font-semibold mb-4'>
            Start and End Props Testing
          </h2>
          <p className='text-primary/70 mb-6'>
            Testing GridItem positioning using start and end props instead of
            span.
          </p>

          {/* Test 1: Using start prop only */}
          <div className='mb-8'>
            <h3 className='text-lg font-medium mb-4'>Using start prop only</h3>
            <Grid className='gap-4'>
              <GridItem start={1}>
                <div className='bg-accent/30 border border-accent p-4 text-center text-sm'>
                  Start at column 1
                </div>
              </GridItem>
              <GridItem start={7}>
                <div className='bg-primary/30 border border-primary p-4 text-center text-sm'>
                  Start at column 7
                </div>
              </GridItem>
            </Grid>
          </div>

          {/* Test 1b: Using arbitrary values for col-start */}
          <div className='mb-8'>
            <h3 className='text-lg font-medium mb-4'>
              Using arbitrary values for col-start
            </h3>
            <Grid className='gap-4'>
              <div className='col-start-1 bg-accent/30 border border-accent p-4 text-center text-sm'>
                Arbitrary: Start at column 1
              </div>
              <div className='col-start-7 bg-primary/30 border border-primary p-4 text-center text-sm'>
                Arbitrary: Start at column 7
              </div>
            </Grid>
          </div>

          {/* Test 1c: Using inline styles to verify grid positioning */}
          <div className='mb-8'>
            <h3 className='text-lg font-medium mb-4'>
              Using inline styles to verify grid positioning
            </h3>
            <Grid className='gap-4'>
              <div
                style={{ gridColumnStart: '1' }}
                className='bg-accent/30 border border-accent p-4 text-center text-sm'
              >
                Inline style: Start at column 1
              </div>
              <div
                style={{ gridColumnStart: '7' }}
                className='bg-primary/30 border border-primary p-4 text-center text-sm'
              >
                Inline style: Start at column 7
              </div>
            </Grid>
          </div>

          {/* Test 2: Using start and end props together */}
          <div className='mb-8'>
            <h3 className='text-lg font-medium mb-4'>
              Using start and end props together
            </h3>
            <Grid className='gap-4'>
              <GridItem start={1} end={5}>
                <div className='bg-accent/40 border border-accent p-4 text-center text-sm'>
                  From column 1 to 5 (4 columns wide)
                </div>
              </GridItem>
              <GridItem start={6} end={9}>
                <div className='bg-primary/40 border border-primary p-4 text-center text-sm'>
                  From column 6 to 9 (3 columns wide)
                </div>
              </GridItem>
              <GridItem start={10} end={13}>
                <div className='bg-accent/50 border border-accent p-4 text-center text-sm'>
                  From column 10 to 13 (3 columns wide)
                </div>
              </GridItem>
            </Grid>
          </div>

          {/* Test 3: Complex layout with gaps */}
          <div className='mb-8'>
            <h3 className='text-lg font-medium mb-4'>
              Complex layout with gaps
            </h3>
            <Grid className='gap-4'>
              <GridItem start={1} end={4}>
                <div className='bg-accent/20 border border-accent p-4 text-center text-sm'>
                  Left section (cols 1-3)
                </div>
              </GridItem>
              <GridItem start={5} end={9}>
                <div className='bg-primary/20 border border-primary p-4 text-center text-sm'>
                  Center section (cols 5-8)
                </div>
              </GridItem>
              <GridItem start={10} end={13}>
                <div className='bg-accent/20 border border-accent p-4 text-center text-sm'>
                  Right section (cols 10-12)
                </div>
              </GridItem>
            </Grid>
          </div>

          {/* Test 4: Overlapping items */}
          <div className='mb-8'>
            <h3 className='text-lg font-medium mb-4'>
              Overlapping items (z-index test)
            </h3>
            <Grid className='gap-4'>
              <GridItem start={1} end={8}>
                <div className='bg-accent/30 border border-accent p-6 text-center relative'>
                  <span className='text-sm'>Background item (cols 1-7)</span>
                </div>
              </GridItem>
              <GridItem start={5} end={10}>
                <div className='bg-primary/80 border border-primary p-4 text-center text-white relative z-10'>
                  <span className='text-sm'>Overlapping item (cols 5-9)</span>
                </div>
              </GridItem>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}
