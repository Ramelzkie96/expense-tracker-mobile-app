import { View, Text, StyleSheet, ScrollView, Pressable, } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';

const transactions = [
  {
    id: 1,
    icon: '🍔',
    title: 'Food & Dining',
    time: 'Today, 12:30 PM',
    amount: '-₱250.00',
    income: false,
  },
  {
    id: 2,
    icon: '🚌',
    title: 'Transportation',
    time: 'Today, 8:15 AM',
    amount: '-₱80.00',
    income: false,
  },
  {
    id: 3,
    icon: '💻',
    title: 'Software',
    time: 'Yesterday, 9:45 PM',
    amount: '-₱500.00',
    income: false,
  },
  {
    id: 4,
    icon: '🛒',
    title: 'Shopping',
    time: 'Yesterday, 6:20 PM',
    amount: '-₱1,200.00',
    income: false,
  },
  {
    id: 5,
    icon: '💰',
    title: 'Salary',
    time: 'Aug 10, 2026',
    amount: '+₱35,000.00',
    income: true,
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Top Section */}
          <View style={styles.topSection}>
            {/* Header */}
            <View style={styles.header}>
              <View>
                <Text style={styles.greeting}>👋 Good morning,</Text>
                <Text style={styles.name}>John Doe!</Text>
              </View>

              <Pressable style={styles.bell}>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="#111827"
                />
              </Pressable>
            </View>

            {/* Balance Card */}
            <View style={styles.balanceCard}>
              <View style={styles.balanceTop}>
                <Text style={styles.balanceLabel}>Total Balance</Text>

                <View style={styles.monthBadge}>
                  <Text style={styles.monthText}>This Month</Text>
                  <Ionicons
                    name="chevron-down"
                    size={16}
                    color="#6B7280"
                  />
                </View>
              </View>

              <Text style={styles.balanceAmount}>₱24,500.00</Text>
            </View>
          </View>

          {/* Income & Expenses */}
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: '#DCFCE7' }]}>
                <Ionicons name="arrow-down" size={18} color="#16A34A" />
              </View>

              <Text style={styles.statTitle}>Income</Text>
              <Text style={styles.statAmount}>₱35,000.00</Text>
            </View>

            <View style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: '#FEE2E2' }]}>
                <Ionicons name="arrow-up" size={18} color="#EF4444" />
              </View>

              <Text style={styles.statTitle}>Expenses</Text>
              <Text style={styles.statAmount}>₱10,500.00</Text>
            </View>
          </View>

          {/* Recent Transactions */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <Pressable>
              <Text style={styles.seeAll}>See all</Text>
            </Pressable>
          </View>

          <View style={styles.transactionsCard}>
            {transactions.map((item, index) => (
              <View key={item.id}>
                <View style={styles.transactionItem}>
                  <View style={styles.left}>
                    <View style={styles.emojiCircle}>
                      <Text style={styles.emoji}>{item.icon}</Text>
                    </View>

                    <View>
                      <Text style={styles.transactionTitle}>{item.title}</Text>
                      <Text style={styles.transactionTime}>{item.time}</Text>
                    </View>
                  </View>

                  <Text
                    style={[
                      styles.transactionAmount,
                      item.income ? styles.income : styles.expense,
                    ]}
                  >
                    {item.amount}
                  </Text>
                </View>

                {index !== transactions.length - 1 && (
                  <View style={styles.divider} />
                )}
              </View>
            ))}
          </View>

          {/* Add Transaction */}
          <Pressable style={styles.addButton}>
            <Ionicons name="add" size={22} color="white" />
            <Text style={styles.addButtonText}>Add Transaction</Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  container: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 90,
  },

  topSection: {
    backgroundColor: '#F0FDF4',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingBottom: 24,
  },

  header: {
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },

  greeting: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 6,
  },

  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
  },

  bell: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },

  balanceCard: {
    marginHorizontal: 24,
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 3,
  },

  balanceTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  balanceLabel: {
    fontSize: 15,
    color: '#6B7280',
    fontWeight: '500',
  },

  monthBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },

  monthText: {
    color: '#6B7280',
    fontWeight: '600',
    marginRight: 4,
    fontSize: 14,
  },

  balanceAmount: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    marginTop: 18,
  },

  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 16,
    marginTop: 20,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },

  statIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  statTitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
    fontWeight: '500',
  },

  statAmount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  seeAll: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },

  transactionsCard: {
    marginHorizontal: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F3F4F6',
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

  emojiCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  emoji: {
    fontSize: 20,
  },

  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  transactionTime: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 3,
  },

  transactionAmount: {
    fontSize: 16,
    fontWeight: '700',
  },

  income: {
    color: '#16A34A',
  },

  expense: {
    color: '#111827',
  },

  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginLeft: 76,
  },

  addButton: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: Colors.primary,
    borderRadius: 18,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
});