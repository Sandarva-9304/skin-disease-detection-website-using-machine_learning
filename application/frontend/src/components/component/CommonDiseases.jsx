import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import ChevronRightIcon from "../ui/ChevronRightIcon";
function CommonDiseases() {
  return (
    <section
      id="commondiseases"
      className="py-12 md:py-16 lg:py-20 bg-[#E7D4B5]"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-10">
        <div className="max-w-full mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Common Skin Conditions
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Explore our comprehensive database of skin conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Cellulitis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A bacterial skin infection causing redness, swelling, warmth,
                  and tenderness in affected areas.
                </p>
                <Link
                  href="https://en.wikipedia.org/wiki/Cellulitis"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Learn More
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Impetigo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A contagious bacterial infection marked by red sores that
                  rupture and form honey-colored crusts.
                </p>
                <Link
                  href="https://en.wikipedia.org/wiki/Impetigo"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Learn More
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Athlete-Foot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A fungal infection causing itching, redness, and cracked skin,
                  typically between the toes.
                </p>
                <Link
                  href="https://en.wikipedia.org/wiki/Athlete%27s_foot"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Learn More
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Nail-Fungus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A fungal infection of nails causing discoloration, thickening,
                  and brittle or crumbling edges.
                </p>
                <Link
                  href="https://en.wikipedia.org/wiki/Onychomycosis"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Learn More
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ringworm</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A fungal infection creating circular, scaly, red patches on
                  the skin or scalp.
                </p>
                <Link
                  href="https://en.wikipedia.org/wiki/Dermatophytosis"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Learn More
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cutaneous-Larva-Migrans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A parasitic skin disease from hookworm larvae, causing itchy,
                  red, wandering skin tracks.
                </p>
                <Link
                  href="https://en.wikipedia.org/wiki/Cutaneous_larva_migrans"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Learn More
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Chickenpox</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A viral infection causing an itchy rash, blisters, and
                  flu-like symptoms, mainly in children.
                </p>
                <Link
                  href="https://en.wikipedia.org/wiki/Chickenpox"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Learn More
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Shingles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A reactivation of the chickenpox virus, causing painful,
                  blistering rashes on one side of the body.
                </p>
                <Link
                  href="https://en.wikipedia.org/wiki/Shingles"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Learn More
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommonDiseases;
