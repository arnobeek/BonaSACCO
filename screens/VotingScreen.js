import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import VotingproposalCard from '../components/VotingproposalCard.js';

const proposals = [
  {
    id: '1',
    title: 'Increase Maximum Loan Amount',
    proposer: 'Board of Directors',
    type: 'Financial',
    for: 234,
    against: 89,
    description: 'Proposal to increase the maximum loan amount from UGX 5M to UGX 10M...',
    status: 'Active',
  },
  {
    id: '2',
    title: 'New Branch Location',
    proposer: 'Executive Committee',
    type: 'Operational',
    for: 156,
    against: 144,
    description: 'Open a new branch office in Kampala City Center to expand our services...',
    status: 'Ended',
  },
  {
    id: '3',
    title: 'Introduce Digital Savings',
    proposer: 'Innovation Team',
    type: 'Operational',
    for: 300,
    against: 50,
    description: 'Proposal to introduce a digital savings platform for members...',
    status: 'Active',
  },
];

export default function VotingScreen() {
  const [selectedTab, setSelectedTab] = useState('active');
  const [search, setSearch] = useState('');

  // Filter proposals based on the selected tab and search query
  const filteredProposals = proposals.filter(
    (p) =>
      p.status.toLowerCase() === selectedTab &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.search}
        placeholder="Search proposals"
        value={search}
        onChangeText={setSearch}
      />

      {/* Tabs for Active and Past Votes */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setSelectedTab('active')}>
          <Text style={[styles.tab, selectedTab === 'active' && styles.activeTab]}>
            Active Votes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('ended')}>
          <Text style={[styles.tab, selectedTab === 'ended' && styles.activeTab]}>
            Past Votes
          </Text>
        </TouchableOpacity>
      </View>

      {/* Proposals List */}
      <FlatList
        data={filteredProposals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VotingproposalCard proposal={item} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No proposals found for this category.</Text>
        }
        style={{ marginTop: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    flex: 1,
  },
  search: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: '#888',
    borderRadius: 20,
  },
  activeTab: {
    color: '#fff',
    backgroundColor: '#004080',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    fontSize: 16,
  },
});