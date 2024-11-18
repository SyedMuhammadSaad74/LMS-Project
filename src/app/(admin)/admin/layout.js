import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div>
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full">
                    <Link href="/admin/dashboard" passHref>
                        <TabsTrigger value="dashboard" as="a">
                            Dashboard
                        </TabsTrigger>
                    </Link>
                    <Link href="/admin/courses" passHref>
                        <TabsTrigger value="courses" as="a">
                            Courses
                        </TabsTrigger>
                    </Link>
                    <Link href="/admin/batches" passHref>
                        <TabsTrigger value="batches" as="a">
                            Batches
                        </TabsTrigger>
                    </Link>
                    <Link href="/admin/trainers" passHref>
                        <TabsTrigger value="trainers" as="a">
                            Trainers
                        </TabsTrigger>
                    </Link>
                    <Link href="/admin/students" passHref>
                        <TabsTrigger value="students" as="a">
                            Student
                        </TabsTrigger>
                    </Link>
                </TabsList>
                <TabsContent value="dashboard">{children}</TabsContent>
                <TabsContent value="courses">{children}</TabsContent>
                <TabsContent value="batches">{children}</TabsContent>
                <TabsContent value="trainers">{children}</TabsContent>
                <TabsContent value="students">{children}</TabsContent>
                
            </Tabs>
        </div>
    );
}
