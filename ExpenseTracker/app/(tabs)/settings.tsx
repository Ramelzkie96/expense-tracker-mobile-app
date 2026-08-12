import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <Text style={styles.headerTitle}>Settings</Text>

          {/* Profile Card */}
          <Pressable style={styles.profileCard}>
            <View style={styles.profileLeft}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>👨</Text>
              </View>

              <View>
                <Text style={styles.profileName}>John Doe</Text>
                <Text style={styles.profileEmail}>john.doe@email.com</Text>
              </View>
            </View>

            <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
          </Pressable>

          {/* Preferences */}
          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.card}>
            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <View style={styles.iconCircle}>
                  <Ionicons name="cash-outline" size={22} color="#111827" />
                </View>
                <Text style={styles.rowTitle}>Currency</Text>
              </View>

              <View style={styles.rowRight}>
                <Text style={styles.rowValue}>PHP (₱)</Text>
                <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
              </View>
            </Pressable>

            <View style={styles.divider} />

            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <View style={styles.iconCircle}>
                  <Ionicons name="grid-outline" size={22} color="#111827" />
                </View>

                <View>
                  <Text style={styles.rowTitle}>Categories</Text>
                  <Text style={styles.rowSubtitle}>Manage your categories</Text>
                </View>
              </View>

              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </Pressable>

            <View style={styles.divider} />

            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <View style={styles.iconCircle}>
                  <Ionicons name="wallet-outline" size={22} color="#111827" />
                </View>

                <View>
                  <Text style={styles.rowTitle}>Payment Methods</Text>
                  <Text style={styles.rowSubtitle}>Manage accounts & cards</Text>
                </View>
              </View>

              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </Pressable>

            <View style={styles.divider} />

            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="notifications-outline"
                    size={22}
                    color="#111827"
                  />
                </View>
                <Text style={styles.rowTitle}>Notifications</Text>
              </View>

              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: '#E5E7EB', true: '#22C55E' }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <View style={styles.iconCircle}>
                  <Ionicons name="moon-outline" size={22} color="#111827" />
                </View>
                <Text style={styles.rowTitle}>Dark Mode</Text>
              </View>

              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: '#E5E7EB', true: '#22C55E' }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>

          {/* Data */}
          <Text style={styles.sectionTitle}>Data</Text>

          <View style={styles.card}>
            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <View style={styles.iconCircle}>
                  <Ionicons name="download-outline" size={22} color="#111827" />
                </View>

                <View>
                  <Text style={styles.rowTitle}>Export Data</Text>
                  <Text style={styles.rowSubtitle}>Download your data</Text>
                </View>
              </View>

              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </Pressable>

            <View style={styles.divider} />

            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <View style={styles.iconCircle}>
                  <Ionicons name="cloud-upload-outline" size={22} color="#111827" />
                </View>

                <View>
                  <Text style={styles.rowTitle}>Import Data</Text>
                  <Text style={styles.rowSubtitle}>Import from backup</Text>
                </View>
              </View>

              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </Pressable>
          </View>

          {/* About */}
          <Text style={styles.sectionTitle}>About</Text>

          <View style={styles.card}>
            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="information-circle-outline"
                    size={22}
                    color="#111827"
                  />
                </View>

                <View>
                  <Text style={styles.rowTitle}>About the App</Text>
                  <Text style={styles.rowSubtitle}>Version 1.0.0</Text>
                </View>
              </View>

              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </Pressable>
          </View>
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
    padding: 20,
    paddingBottom: 100,
  },

  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 24,
  },

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },

  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },

  avatarText: {
    fontSize: 32,
  },

  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },

  profileEmail: {
    fontSize: 15,
    color: '#6B7280',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    overflow: 'hidden',
    marginBottom: 28,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },

  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  rowTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  rowSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 3,
  },

  rowValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    marginRight: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginLeft: 74,
  },
});