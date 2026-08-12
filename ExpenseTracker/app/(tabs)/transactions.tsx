import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { useTheme } from '@/context/ThemeContext';

const sections = [
  {
    date: 'August 11, 2026',
    total: '-₱330.00',
    income: false,
    data: [
      { icon: '🍔', title: 'Food & Dining', time: '12:30 PM', amount: '-₱250.00', income: false },
      { icon: '🚌', title: 'Transportation', time: '8:15 AM', amount: '-₱80.00', income: false },
    ],
  },
  {
    date: 'August 10, 2026',
    total: '+₱33,800.00',
    income: true,
    data: [
      { icon: '💻', title: 'Software', time: '9:45 PM', amount: '-₱500.00', income: false },
      { icon: '🛒', title: 'Shopping', time: '6:20 PM', amount: '-₱1,200.00', income: false },
      { icon: '💰', title: 'Salary', time: '9:00 AM', amount: '+₱35,000.00', income: true },
    ],
  },
  {
    date: 'August 9, 2026',
    total: '-₱450.00',
    income: false,
    data: [
      { icon: '☕', title: 'Coffee', time: '4:10 PM', amount: '-₱120.00', income: false },
      { icon: '🎬', title: 'Entertainment', time: '2:30 PM', amount: '-₱330.00', income: false },
    ],
  },
];

export default function TransactionsScreen() {
  const { darkMode, theme } = useTheme();
  return (
  <SafeAreaView
    style={[styles.safeArea, { backgroundColor: theme.background }]}
  >
    <View
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Transactions
        </Text>

        {/* Search */}
        <View style={styles.searchRow}>
          <View
            style={[
              styles.searchContainer,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="search"
              size={20}
              color={theme.subText}
            />

            <TextInput
              placeholder="Search transactions..."
              placeholderTextColor={theme.subText}
              style={[
                styles.searchInput,
                { color: theme.text },
              ]}
            />
          </View>

          <Pressable
            style={[
              styles.filterButton,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="options-outline"
              size={22}
              color={theme.icon}
            />
          </Pressable>
        </View>

        {/* Filter Chips */}
        <View style={styles.chipsRow}>
          <Pressable
            style={[
              styles.chip,
              styles.chipActive,
              { backgroundColor: theme.primary },
            ]}
          >
            <Text
              style={[
                styles.chipText,
                styles.chipTextActive,
              ]}
            >
              All
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.chip,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Text
              style={[
                styles.chipText,
                { color: theme.text },
              ]}
            >
              Income
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.chip,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Text
              style={[
                styles.chipText,
                { color: theme.text },
              ]}
            >
              Expense
            </Text>
          </Pressable>
        </View>

        {/* Sections */}
        {sections.map((section) => (
          <View key={section.date} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text
                style={[
                  styles.sectionDate,
                  { color: theme.text },
                ]}
              >
                {section.date}
              </Text>

              <Text
                style={[
                  styles.sectionTotal,
                  section.income
                    ? styles.income
                    : styles.expense,
                ]}
              >
                {section.total}
              </Text>
            </View>

            <View
              style={[
                styles.card,
                {
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                },
              ]}
            >
              {section.data.map((item, index) => (
                <View key={item.title + item.time}>
                  <View style={styles.transactionItem}>
                    <View style={styles.left}>
                      <View
                        style={[
                          styles.iconCircle,
                          { backgroundColor: theme.card2 },
                        ]}
                      >
                        <Text style={styles.emoji}>{item.icon}</Text>
                      </View>

                      <View>
                        <Text
                          style={[
                            styles.title,
                            { color: theme.text },
                          ]}
                        >
                          {item.title}
                        </Text>

                        <Text
                          style={[
                            styles.time,
                            { color: theme.subText },
                          ]}
                        >
                          {item.time}
                        </Text>
                      </View>
                    </View>

                    <Text
                      style={[
                        styles.amount,
                        item.income
                          ? styles.income
                          : styles.expense,
                      ]}
                    >
                      {item.amount}
                    </Text>
                  </View>

                  {index !== section.data.length - 1 && (
                    <View
                      style={[
                        styles.divider,
                        { backgroundColor: theme.divider },
                      ]}
                    />
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Add Button */}
      <Pressable
        style={[
          styles.fab,
          { backgroundColor: theme.primary },
        ]}
      >
        <Ionicons name="add" size={32} color="white" />
      </Pressable>
    </View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 120,
  },

  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 24,
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  searchContainer: {
    flex: 1,
    height: 52,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },

  filterButton: {
    width: 52,
    height: 52,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },

  chipsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },

  chip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
  },

  chipActive: {
    borderWidth: 1,
  },

  chipText: {
    fontSize: 15,
    fontWeight: '600',
  },

  chipTextActive: {
    color: '#FFFFFF',
  },

  section: {
    marginBottom: 28,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  sectionDate: {
    fontSize: 18,
    fontWeight: '700',
  },

  sectionTotal: {
    fontSize: 18,
    fontWeight: '700',
  },

  card: {
    borderRadius: 24,
    borderWidth: 1,
    overflow: 'hidden',
  },

  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  emoji: {
    fontSize: 22,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  time: {
    fontSize: 13,
    marginTop: 3,
  },

  amount: {
    fontSize: 16,
    fontWeight: '700',
  },

  income: {
    color: '#16A34A',
  },

  expense: {
    color: '#EF4444',
  },

  divider: {
    height: 1,
    marginLeft: 80,
  },

  fab: {
    position: 'absolute',
    right: 24,
    bottom: 100,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#16A34A',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
});