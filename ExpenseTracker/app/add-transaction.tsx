import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  useColorScheme,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';

const categories = [
  { icon: 'fast-food-outline', label: 'Food & Dining', color: '#EF4444' },
  { icon: 'bus-outline', label: 'Transportation', color: '#22C55E' },
  { icon: 'cart-outline', label: 'Shopping', color: '#2563EB' },
  { icon: 'home-outline', label: 'Housing', color: '#F59E0B' },
  { icon: 'game-controller-outline', label: 'Entertainment', color: '#7C3AED' },
  { icon: 'heart-outline', label: 'Health', color: '#EC4899' },
  { icon: 'book-outline', label: 'Education', color: '#2563EB' },
  { icon: 'flash-outline', label: 'Bills & Utilities', color: '#EAB308' },
  { icon: 'cash-outline', label: 'Salary', color: '#16A34A' },
  { icon: 'briefcase-outline', label: 'Freelance', color: '#0EA5E9' },
  { icon: 'trending-up-outline', label: 'Investments', color: '#8B5CF6' },
  { icon: 'ellipsis-horizontal', label: 'Other', color: '#6B7280' },
];

export default function AddTransactionScreen() {
  const scheme = useColorScheme();
  const { darkMode, theme } = useTheme();

  const [type, setType] = useState<'expense' | 'income'>('expense');
  const [selectedCategory, setSelectedCategory] = useState('Food & Dining');

  return (
    <SafeAreaView
    style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
    {/* Header */}
    <View
        style={[
        styles.header,
        { borderBottomColor: theme.border },
        ]}
    >
        <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={theme.text} />
        </Pressable>

        <Text style={[styles.headerTitle, { color: theme.text }]}>
        Add Transaction
        </Text>

        <Pressable>
        <Text style={[styles.saveText, { color: theme.primary }]}>
            Save
        </Text>
        </Pressable>
    </View>

    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
    >
        {/* Type Switch */}
        <View
        style={[
            styles.typeContainer,
            { backgroundColor: theme.card, borderColor: theme.border },
        ]}
        >
        <Pressable
            style={[
            styles.typeButton,
            type === 'expense' && {
                backgroundColor: darkMode ? '#331313' : '#FEF2F2',
            },
            ]}
            onPress={() => setType('expense')}
        >
            <Ionicons
            name="remove-circle-outline"
            size={18}
            color={type === 'expense' ? '#EF4444' : theme.subText}
            />
            <Text
            style={[
                styles.typeText,
                { color: type === 'expense' ? '#EF4444' : theme.subText },
            ]}
            >
            Expense
            </Text>
        </Pressable>

        <Pressable
            style={[
            styles.typeButton,
            type === 'income' && {
                backgroundColor: darkMode ? '#10251A' : '#ECFDF5',
            },
            ]}
            onPress={() => setType('income')}
        >
            <Ionicons
            name="add-circle-outline"
            size={18}
            color={type === 'income' ? '#16A34A' : theme.subText}
            />
            <Text
            style={[
                styles.typeText,
                { color: type === 'income' ? '#16A34A' : theme.subText },
            ]}
            >
            Income
            </Text>
        </Pressable>
        </View>

        {/* Amount */}
        <View
        style={[
            styles.card,
            { backgroundColor: theme.card, borderColor: theme.border },
        ]}
        >
        <Text style={[styles.label, { color: theme.subText }]}>Amount</Text>

        <View style={styles.amountRow}>
            <TextInput
            style={[styles.amountInput, { color: theme.text }]}
            defaultValue="250.00"
            keyboardType="numeric"
            placeholder="0.00"
            placeholderTextColor={theme.subText}
            />

            <View style={styles.currencyContainer}>
            <View
                style={[
                styles.currencyIcon,
                { backgroundColor: theme.card2 },
                ]}
            >
                <Ionicons
                name="calculator-outline"
                size={22}
                color={theme.text}
                />
            </View>

            <Row align="center" gap={4}>
                <Text style={[styles.currencyText, { color: theme.text }]}>
                PHP
                </Text>
                <Ionicons
                name="chevron-down"
                size={16}
                color={theme.subText}
                />
            </Row>
            </View>
        </View>
        </View>

        {/* Category */}
        <View
        style={[
            styles.card,
            { backgroundColor: theme.card, borderColor: theme.border },
        ]}
        >
        <Row align="center" justify="between">
            <Text style={[styles.label, { color: theme.subText }]}>
            Category
            </Text>
            <Ionicons name="chevron-up" size={20} color={theme.subText} />
        </Row>

        <View
            style={[
            styles.searchBox,
            { backgroundColor: theme.card2, borderColor: theme.border },
            ]}
        >
            <Ionicons name="search" size={18} color={theme.subText} />
            <TextInput
            placeholder="Search category"
            placeholderTextColor={theme.subText}
            style={[styles.searchInput, { color: theme.text }]}
            />
        </View>

        <View style={styles.categoryGrid}>
            {categories.map((item) => {
            const selected = selectedCategory === item.label;

            return (
                <Pressable
                key={item.label}
                style={styles.categoryItem}
                onPress={() => setSelectedCategory(item.label)}
                >
                <View
                    style={[
                    styles.categoryCircle,
                    {
                        backgroundColor: darkMode
                        ? item.color + '22'
                        : item.color + '18',
                        borderColor: selected ? item.color : 'transparent',
                        borderWidth: selected ? 2 : 0,
                    },
                    ]}
                >
                    <Ionicons
                    name={item.icon as any}
                    size={26}
                    color={item.color}
                    />

                    {selected && (
                    <View
                        style={[
                        styles.checkBadge,
                        { backgroundColor: item.color },
                        ]}
                    >
                        <Ionicons name="checkmark" size={12} color="#fff" />
                    </View>
                    )}
                </View>

                <Text
                    style={[
                    styles.categoryLabel,
                    { color: theme.text },
                    ]}
                    numberOfLines={2}
                >
                    {item.label}
                </Text>
                </Pressable>
            );
            })}
        </View>
        </View>

        {/* Date */}
        <Pressable
        style={[
            styles.rowCard,
            { backgroundColor: theme.card, borderColor: theme.border },
        ]}
        >
        <Row align="center" gap={14}>
            <View
            style={[
                styles.smallIcon,
                { backgroundColor: darkMode ? '#10251A' : '#ECFDF5' },
            ]}
            >
            <Ionicons name="calendar-outline" size={20} color="#16A34A" />
            </View>

            <View>
            <Text style={[styles.rowTitle, { color: theme.text }]}>Date</Text>
            <Text style={[styles.rowValue, { color: theme.subText }]}>
                August 11, 2026
            </Text>
            </View>
        </Row>

        <Ionicons name="chevron-forward" size={20} color={theme.subText} />
        </Pressable>

        {/* Payment Method */}
        <Pressable
        style={[
            styles.rowCard,
            { backgroundColor: theme.card, borderColor: theme.border },
        ]}
        >
        <Row align="center" gap={14}>
            <View
            style={[
                styles.smallIcon,
                { backgroundColor: darkMode ? '#13233D' : '#EFF6FF' },
            ]}
            >
            <Ionicons name="card-outline" size={20} color="#2563EB" />
            </View>

            <View>
            <Text style={[styles.rowTitle, { color: theme.text }]}>
                Payment Method
            </Text>
            <Text style={[styles.rowValue, { color: theme.subText }]}>
                Cash
            </Text>
            </View>
        </Row>

        <Ionicons name="chevron-forward" size={20} color={theme.subText} />
        </Pressable>

        {/* Account */}
        <Pressable
        style={[
            styles.rowCard,
            { backgroundColor: theme.card, borderColor: theme.border },
        ]}
        >
        <Row align="center" gap={14}>
            <View
            style={[
                styles.smallIcon,
                { backgroundColor: darkMode ? '#22143A' : '#F5F3FF' },
            ]}
            >
            <Ionicons name="wallet-outline" size={20} color="#7C3AED" />
            </View>

            <View>
            <Text style={[styles.rowTitle, { color: theme.text }]}>
                Account (Optional)
            </Text>
            <Text style={[styles.rowValue, { color: theme.subText }]}>
                Wallet
            </Text>
            </View>
        </Row>

        <Ionicons name="chevron-forward" size={20} color={theme.subText} />
        </Pressable>

        {/* Note */}
        <View
        style={[
            styles.card,
            { backgroundColor: theme.card, borderColor: theme.border },
        ]}
        >
        <Text style={[styles.label, { color: theme.subText }]}>
            Note (Optional)
        </Text>

        <View
            style={[
            styles.noteBox,
            { backgroundColor: theme.card2, borderColor: theme.border },
            ]}
        >
            <Ionicons
            name="document-text-outline"
            size={20}
            color={theme.subText}
            />

            <TextInput
            placeholder="e.g. Lunch at my favorite restaurant"
            placeholderTextColor={theme.subText}
            style={[styles.noteInput, { color: theme.text }]}
            />
        </View>
        </View>

        {/* Receipt */}
        <View
        style={[
            styles.card,
            { backgroundColor: theme.card, borderColor: theme.border },
        ]}
        >
        <Text style={[styles.label, { color: theme.subText }]}>
            Attach Receipt (Optional)
        </Text>

        <Pressable
            style={[
            styles.receiptButton,
            { borderColor: theme.border },
            ]}
        >
            <Ionicons
            name="camera-outline"
            size={22}
            color={theme.primary}
            />
            <Text style={[styles.receiptText, { color: theme.primary }]}>
            Add Receipt
            </Text>
        </Pressable>
        </View>
    </ScrollView>
        </SafeAreaView>
    );
    }

    const Row = ({
    children,
    align = 'center',
    justify = 'start',
    gap = 0,
    }: any) => (
    <View
        style={{
        flexDirection: 'row',
        alignItems: align,
        justifyContent:
            justify === 'between'
            ? 'space-between'
            : justify === 'center'
            ? 'center'
            : 'flex-start',
        gap,
        }}
    >
        {children}
    </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  header: {
    height: 56,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
  },

  saveText: {
    fontSize: 17,
    fontWeight: '700',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
    gap: 18,
  },

  typeContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
    padding: 6,
    gap: 6,
  },

  typeButton: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  typeText: {
    fontSize: 15,
    fontWeight: '600',
  },

  card: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 18,
    gap: 14,
  },

  label: {
    fontSize: 15,
    fontWeight: '500',
  },

  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  amountInput: {
    flex: 1,
    fontSize: 44,
    fontWeight: '800',
    paddingVertical: 8,
  },

  currencyContainer: {
    alignItems: 'center',
    gap: 10,
    marginLeft: 16,
  },

  currencyIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },

  currencyText: {
    fontSize: 15,
    fontWeight: '600',
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
    gap: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
  },

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 18,
    marginTop: 6,
  },

  categoryItem: {
    width: '23%',
    alignItems: 'center',
    gap: 8,
  },

  categoryCircle: {
    width: 68,
    height: 68,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },

  categoryLabel: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 16,
  },

  rowCard: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  smallIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  rowValue: {
    fontSize: 14,
    marginTop: 3,
  },

  noteBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 14,
    minHeight: 56,
    gap: 10,
  },

  noteInput: {
    flex: 1,
    fontSize: 15,
  },

  receiptButton: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 18,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  receiptText: {
    fontSize: 16,
    fontWeight: '700',
  },
});