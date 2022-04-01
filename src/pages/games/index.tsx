import { Button, Card, Grid } from '@alifd/next';
import React from 'react';
import games from './games';

export default function Games() {
  return (
    <div>
      <Grid.Row gutter={30} wrap>
        {games.map((game) => (
          <Grid.Col xs={6} key={game.title}>
            <Card free style={{ marginBottom: 30 }}>
              <Card.Header title={game.title} />
              <Card.Content>
                <img src={game.image} width="400" height="225" style={{ width: '100%', height: 'auto' }} />
                <div>{game.description}</div>
              </Card.Content>
              <Card.Actions>
                <Button type="primary">Buy $59.99</Button>
              </Card.Actions>
            </Card>
          </Grid.Col>
        ))}
      </Grid.Row>
    </div>
  );
}
