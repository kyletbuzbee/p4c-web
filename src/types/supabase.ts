export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.1';
  };
  public: {
    Tables: {
      applications: {
        Row: {
          email: string;
          first_name: string;
          id: string;
          last_name: string;
          message: string | null;
          military_branch: string | null;
          phone: string;
          property_id: string | null;
          status: string | null;
          submitted_at: string;
        };
        Insert: {
          email: string;
          first_name: string;
          id?: string;
          last_name: string;
          message?: string | null;
          military_branch?: string | null;
          phone: string;
          property_id?: string | null;
          status?: string | null;
          submitted_at?: string;
        };
        Update: {
          email?: string;
          first_name?: string;
          id?: string;
          last_name?: string;
          message?: string | null;
          military_branch?: string | null;
          phone?: string;
          property_id?: string | null;
          status?: string | null;
          submitted_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'applications_property_id_fkey';
            columns: ['property_id'];
            isOneToOne: false;
            referencedRelation: 'properties';
            referencedColumns: ['id'];
          },
        ];
      };
      impact_metrics: {
        Row: {
          current_value: number;
          icon_name: string | null;
          id: string;
          label: string;
          last_updated: string;
          metric_key: string;
        };
        Insert: {
          current_value?: number;
          icon_name?: string | null;
          id?: string;
          label: string;
          last_updated?: string;
          metric_key: string;
        };
        Update: {
          current_value?: number;
          icon_name?: string | null;
          id?: string;
          label?: string;
          last_updated?: string;
          metric_key?: string;
        };
        Relationships: [];
      };
      maintenance_requests: {
        Row: {
          created_at: string;
          description: string;
          id: string;
          issue_category: string;
          photo_url: string | null;
          priority: string | null;
          property_id: string;
          resident_id: string;
          status: string | null;
        };
        Insert: {
          created_at?: string;
          description: string;
          id?: string;
          issue_category: string;
          photo_url?: string | null;
          priority?: string | null;
          property_id: string;
          resident_id: string;
          status?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string;
          id?: string;
          issue_category?: string;
          photo_url?: string | null;
          priority?: string | null;
          property_id?: string;
          resident_id?: string;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'maintenance_requests_property_id_fkey';
            columns: ['property_id'];
            isOneToOne: false;
            referencedRelation: 'properties';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'maintenance_requests_resident_id_fkey';
            columns: ['resident_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      profiles: {
        Row: {
          created_at: string;
          current_property_id: string | null;
          first_name: string | null;
          id: string;
          is_veteran: boolean | null;
          last_name: string | null;
          lease_start_date: string | null;
          military_branch: string | null;
        };
        Insert: {
          created_at?: string;
          current_property_id?: string | null;
          first_name?: string | null;
          id: string;
          is_veteran?: boolean | null;
          last_name?: string | null;
          lease_start_date?: string | null;
          military_branch?: string | null;
        };
        Update: {
          created_at?: string;
          current_property_id?: string | null;
          first_name?: string | null;
          id?: string;
          is_veteran?: boolean | null;
          last_name?: string | null;
          lease_start_date?: string | null;
          military_branch?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_current_property_id_fkey';
            columns: ['current_property_id'];
            isOneToOne: false;
            referencedRelation: 'properties';
            referencedColumns: ['id'];
          },
        ];
      };
      properties: {
        Row: {
          accessibility_features: string[] | null;
          address: string;
          amenities: string[] | null;
          availability_date: string | null;
          badges: string[] | null;
          baths: number;
          beds: number;
          city: string;
          created_at: string;
          description: string | null;
          id: string;
          image_url: string;
          is_active: boolean | null;
          lat: number | null;
          lng: number | null;
          neighborhood: string | null;
          price: number;
          school_district: string | null;
          sqft: number;
          title: string;
        };
        Insert: {
          accessibility_features?: string[] | null;
          address: string;
          amenities?: string[] | null;
          availability_date?: string | null;
          badges?: string[] | null;
          baths: number;
          beds: number;
          city: string;
          created_at?: string;
          description?: string | null;
          id?: string;
          image_url: string;
          is_active?: boolean | null;
          lat?: number | null;
          lng?: number | null;
          neighborhood?: string | null;
          price: number;
          school_district?: string | null;
          sqft: number;
          title: string;
        };
        Update: {
          accessibility_features?: string[] | null;
          address?: string;
          amenities?: string[] | null;
          availability_date?: string | null;
          badges?: string[] | null;
          baths?: number;
          beds?: number;
          city?: string;
          created_at?: string;
          description?: string | null;
          id?: string;
          image_url?: string;
          is_active?: boolean | null;
          lat?: number | null;
          lng?: number | null;
          neighborhood?: string | null;
          price?: number;
          school_district?: string | null;
          sqft?: number;
          title?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  'public'
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
