interface Concert {
  title: string;
  artist: string;
  capacity: number;
  date: Date;
  place: string;
  priceTezos: number;
  contractAddress?: string;
}

export async function getConcerts(): Promise<Concert[]> {
  // Concerts are stored in a json file for now
  // TODO: change it to request the back and get the data from the back
  const response = await fetch('/concerts.json');
  const data = await response.json();
  return data as Concert[];
}

export async function createConcert(concert: Concert): Promise<Concert[]> {
  const response = await fetch('http://localhost:3001/show', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(concert),
  });

  if (!response.ok) {
    throw new Error(`Failed to create concert: ${response.status}`);
  }

  return await response.json();
}
